import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonorCreateRoutingModule } from './donor-create-routing.module';
import { DonorCreateComponent } from './donor-create.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  imports: [CommonModule, DonorCreateRoutingModule, FormsModule],
  declarations: [DonorCreateComponent],
  exports: [DonorCreateComponent],
})
export class DonorCreateModule {}
