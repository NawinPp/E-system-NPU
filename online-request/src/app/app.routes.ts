import { Routes } from '@angular/router';
import { Login } from './Compoment/login/login';
import { Register } from './Compoment/register/register';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register }
];
