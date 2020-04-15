import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './student/detail/detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { PipeComponent } from './pipe/pipe.component';
import { DependencyServicesComponent } from './dependency-services/dependency-services.component';
import { EmployeeService } from '../app/services/employee.service';
import { ChildrenRouteComponent } from './children-route/children-route.component'

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DetailComponent,
    ReactiveFormComponent,
    TemplateDrivenComponent,
    PagenotfoundComponent,
    HttpclientComponent,
    PipeComponent,
    DependencyServicesComponent,
    ChildrenRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
