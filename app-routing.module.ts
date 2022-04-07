import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { HrDashComponent } from './hr-dash/hr-dash.component';

const routes: Routes = [
  {
    path:'', redirectTo:'Hr', pathMatch:'full'
  },
  {
    path:'Hr',component:HrDashComponent
  },
  {
    path:'AppliedJobs',component:AppliedJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
