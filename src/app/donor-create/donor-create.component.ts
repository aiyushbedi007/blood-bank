import { Component, OnInit, Input } from '@angular/core';
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

  @Input() donorDetails = { bloodGroup: '', name: '', address: '', email: ''};

  constructor(
    private tokenStorageService: TokenStorageService,
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  addDonor(): void {
      this.restApi.createDonor(this.donorDetails).subscribe((data: {}) => {
      this.router.navigate(['/donor-list']);
      });
  }
}
