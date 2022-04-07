import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrDashComponent } from './hr-dash/hr-dash.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HrDashComponent,
    AppliedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
