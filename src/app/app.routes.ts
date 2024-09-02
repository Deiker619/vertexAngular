import { Routes } from '@angular/router';
import { LandingComponent } from './dashboard/landing/landing.component';
import { RegisterComponent } from './register/register/register.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: 'login',
        component: RegisterComponent    
    }
    
];
