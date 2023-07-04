import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';
import { NotFoundComponent } from './account/not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { ManageAccountsComponent } from './account/manage-accounts/manage-accounts.component';
import { ManageBranchesComponent } from './branches/manage-branches/manage-branches.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'login' , component : LoginComponent },
  { path : 'admin' , component : AdminComponent, canActivate : [AuthGuard] , children : [
    {path : 'manageAccount' , component : ManageAccountsComponent},
    {path : 'manageBranches' , component : ManageBranchesComponent},
    {path : 'register' , component : RegisterComponent},
    {path : 'add-branch' , component : AddBranchComponent}
  ]},
  { path : '**' , component : NotFoundComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
