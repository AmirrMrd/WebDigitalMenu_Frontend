import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './account/not-found/not-found.component';
import { EditComponent } from './branches/edit-branch/edit-branch.component';
import { AdminComponent } from './admin/admin.component';
import { ManageAccountsComponent } from './account/manage-accounts/manage-accounts.component';
import { ManageBranchesComponent } from './branches/manage-branches/manage-branches.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddBranchComponent,
    HomeComponent,
    NotFoundComponent,
    EditComponent,
    AdminComponent,
    ManageAccountsComponent,
    ManageBranchesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
