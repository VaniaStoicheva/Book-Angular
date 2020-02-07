import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterFormComponent } from '../app/components/authentication/register-form/register-form.component';
import { LoginFormComponent } from '../app/components/authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from '../app/components/authentication/logout/logout.component';
import { BooksModule } from '../app/components/books/books.module'


// Guards
import { AuthGuard } from './core/guards/authentication/auth.guard';

export const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
 { path: 'books', loadChildren: 'app/components/books/books.module#BooksModule' }
]
