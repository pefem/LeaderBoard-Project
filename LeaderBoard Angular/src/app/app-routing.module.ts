import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot.password.component';
import { UsersComponent } from './users/users.component';
import { CreateOrEditUserComponent } from './users/createoredit.user.component';
import { BoardComponent } from './users/board.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'add',
        component: CreateOrEditUserComponent
      },
      {
        path: 'edit/:id',
        component: CreateOrEditUserComponent
      },
      {
        path: 'board/:id',
        component: BoardComponent
      },
    ]
  },
  {
    path: 'add-user-to-board',
    component: CreateOrEditUserComponent
  },

  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
