import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorEditComponent } from './donor-edit.component';


const routes: Routes = [
    { path: '', component: DonorEditComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DonorEditRoutingModule { }
