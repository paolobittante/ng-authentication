
// i can inject as a dependecy
import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Auth} from './services/auth.service';

@Injectable()
//with this class i can bloc certains routers and add conditions
export class AuthGuard implements CanActivate{
    constructor(private auth: Auth, private router: Router){
        
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.authenticated()){
            console.log('AUTH GUARD PASSED');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            //redirect to the homepage
            this.router.navigate(['/']);
            return false;
        }
    }
}