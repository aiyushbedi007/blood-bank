import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-donor-create',
  templateUrl: './donor-create.component.html',
  styleUrls: ['./donor-create.component.css']
})
export class DonorCreateComponent implements OnInit {

  isLoggedIn = false;
  groups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  donorDetails = { bloodGroup: '', dname: '', address: '', email: ''};
  isSuccessful = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Check if user is logged in
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(): void {
    // Create a new Donor
      this.restApi.createDonor(this.donorDetails).subscribe(
        (data: {}) => {
        this.isSuccessful = true;
        this.router.navigate(['/donor-list']);
      },
      err => {
        const errors = err.error.errors;
        // Handling Errors;
        console.log(err.error.errors);
      });
  }
}
