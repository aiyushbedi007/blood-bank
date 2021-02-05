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
  donorData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.restApi.getDonor(this.id).subscribe((data: {}) => {
      this.donorData = data;
    });
  }

  // Update Donor data
  updateDonor(): void {
    if (window.confirm('Are you sure, you want to update?')){
      this.restApi.updateDonor(this.id, this.donorData).subscribe(data => {
        this.router.navigate(['/donor-list']);
      });
    }
  }

}
