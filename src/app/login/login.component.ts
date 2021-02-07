import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  emailError = '';
  passwordError = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // Check for User Login
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorage.getUser();
      this.roles = user.user.role;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    // Authenticate the user
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        const user = this.tokenStorage.getUser();
        this.roles = user.user.role;
        this.reloadPage();
      },
      err => {
        const errors = err.error.errors;
        // Handling Errors;
        console.log(err.error.errors);
        this.emailError = errors.email;
        this.passwordError = errors.password;
        this.errorMessage = this.emailError + ' ' + this.passwordError;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
