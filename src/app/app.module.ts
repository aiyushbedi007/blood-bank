import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DonorCreateComponent } from './donor-create/donor-create.component';
import { DonorEditComponent } from './donor-edit/donor-edit.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { HomeComponent } from './home/home.component';

// Auth Interceptor
import { authInterceptorProviders } from './_helpers/auth.interceptor';

// Filter
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonorCreateComponent,
    DonorEditComponent,
    DonorListComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
