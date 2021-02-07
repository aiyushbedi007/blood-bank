import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorListComponent } from './donor-list.component';


const routes: Routes = [
    { path: '', component: DonorListComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DonorListRoutingModule { }
