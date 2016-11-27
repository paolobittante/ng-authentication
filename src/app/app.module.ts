import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { AUTH_PROVIDERS} from 'angular2-jwt';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { Auth } from './services/auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ 
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard    
     ], //fornisco i servizi
  bootstrap: [AppComponent]
})
export class AppModule { }
