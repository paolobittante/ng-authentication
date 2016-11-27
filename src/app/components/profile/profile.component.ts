import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  profile:any;

  constructor(private auth:Auth){
    //I have to convert also from a json string to an object
    this.profile = JSON.parse(localStorage.getItem('profile'));

    console.log(this.profile);
  }
}
