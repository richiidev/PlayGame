import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';



 export const ROUTES: Routes = [
  {
    path: 'login', component: LoginComponent
  },

// inicializacion de pagina

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];
  export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
