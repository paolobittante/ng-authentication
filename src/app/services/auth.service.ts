// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('TuLF6H6bryACSPfcg95B8B8FlEeH8iV4', 'paolobittante.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, function(error:any, profile:any){
        if(error){
          throw new Error(error);
        }
          localStorage.setItem('id_token',authResult.idToken);
          
          //data can be only type string, so i convert with JSON.stringify
          localStorage.setItem('profile',JSON.stringify(profile));
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    //whenever I logout i have to cancel also the profile data
    localStorage.removeItem('profile');
  };
}