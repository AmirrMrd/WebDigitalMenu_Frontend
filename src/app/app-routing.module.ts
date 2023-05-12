import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';

const routes: Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'register' , component : RegisterComponent , canActivate : [AuthGuard] },
  { path : 'home' , component : HomeComponent },
  { path : 'add-branch' , component : AddBranchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
