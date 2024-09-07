import { Routes } from '@angular/router';
import { LandingComponent } from './dashboard/landing/landing.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: 'login',
        loadComponent:()=> import('./login/login.component').then((m)=>m.LoginComponent)  
    },
    {
        path: 'register',
        loadComponent:()=> import('./register/register/register.component').then((m)=>m.RegisterComponent)  
    }
    
];
