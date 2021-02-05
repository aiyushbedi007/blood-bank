import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorEditComponent } from './donor-edit/donor-edit.component';
import { DonorListComponent } from './donor-list/donor-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-enquiry', component: DonorCreateComponent },
  { path: 'enquiry-list', component: DonorListComponent },
  { path: 'enquiry-edit/:id', component: DonorEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
