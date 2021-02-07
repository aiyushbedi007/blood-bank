import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Declaring Routes and Lazy Modules
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'create-donor', loadChildren: () => import('./donor-create/donor-create.module').then(m => m.DonorCreateModule)},
  { path: 'donor-list', loadChildren: () => import('./donor-list/donor-list.module').then(m => m.DonorListModule) },
  { path: 'donor-edit/:id', loadChildren: () => import('./donor-edit/donor-edit.module').then(m => m.DonorEditModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
