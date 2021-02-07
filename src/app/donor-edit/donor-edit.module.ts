import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorEditRoutingModule } from './donor-edit-routing.module';
import { DonorEditComponent } from './donor-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, DonorEditRoutingModule, FormsModule],
  declarations: [DonorEditComponent],
  exports: [DonorEditComponent],
})
export class DonorEditModule {}
