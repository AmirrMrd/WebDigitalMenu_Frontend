import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';
import { NotFoundComponent } from './account/not-found/not-found.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'login' , component : LoginComponent },
  { path : 'add-branch' , component : AddBranchComponent , canActivate : [AuthGuard] },
  { path : '**' , component : NotFoundComponent },
  { path : 'register' , component : RegisterComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
