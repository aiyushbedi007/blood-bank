import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-donor-edit',
  templateUrl: './donor-edit.component.html',
  styleUrls: ['./donor-edit.component.css']
})
export class DonorEditComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;
  donorDetails: any = {};
  isSuccessful = false;
  groups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    // Fetch Donor Details
    this.restApi.getDonor(this.id).subscribe((data: {}) => {
      this.donorDetails = data;
    });
  }

  // Update Donor data
  onSubmit(): void {
    if (window.confirm('Are you sure, you want to update?')){
      this.restApi.updateDonor(this.id, this.donorDetails).subscribe(data => {
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

}
