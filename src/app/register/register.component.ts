import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Form Inputs
  form: any = {
    uname: null,
    email: null,
    password: null
  };

  // Error Messages
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  emailError = '';
  passwordError = '';


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { uname, email, password } = this.form;
    const role = 'user';

    // Register User
    this.authService.register(uname, email, password, role).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        const errors = err.error.errors;
        // Handling Errors;
        console.log(err.error.errors);
        this.emailError = errors.email;
        this.passwordError = errors.password;
        this.errorMessage = this.emailError + ' ' + this.passwordError;
        this.isSignUpFailed = true;
      }
    );
  }
}
