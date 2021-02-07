import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorListRoutingModule } from './donor-list-routing.module';
import { DonorListComponent } from './donor-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilterPipe } from '../filter.pipe';


@NgModule({
  imports: [CommonModule, DonorListRoutingModule, FormsModule],
  declarations: [DonorListComponent, TableFilterPipe],
  exports: [DonorListComponent],
})
export class DonorListModule {}
