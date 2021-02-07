import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorCreateComponent } from './donor-create.component';


const routes: Routes = [
    { path: '', component: DonorCreateComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DonorCreateRoutingModule { }
