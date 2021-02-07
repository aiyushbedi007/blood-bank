import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {

  Donor: any = [];
  isLoggedIn = false;
  role: string;
  email: string;
  public bloodGroup: string;
  groups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  constructor(
    private tokenStorageService: TokenStorageService,
    public router: Router,
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {

    // Check for User Login
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      // Get the Logged in User
      const user = this.tokenStorageService.getUser();
      this.role = user.user.role;
      this.email = user.user.email;
      this.loadDonors();
    }
  }

  // Get Donors list
  loadDonors(): any {
    return this.restApi.getDonors().subscribe((data: {}) => {
      this.Donor = data;
    });
  }

  // Delete Donor
  deleteDonor(id: any): void {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteDonor(id).subscribe(data => {
        this.loadDonors();
      });
    }
  }

}
