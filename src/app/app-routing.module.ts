import { DependencyServicesComponent } from './dependency-services/dependency-services.component';
import { PipeComponent } from './pipe/pipe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DetailComponent } from './student/detail/detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { ChildrenRouteComponent } from './children-route/children-route.component';


const routes: Routes = [
  { path: '', redirectTo: 'reactiveform', pathMatch: 'full' },
  { path: 'student', component: StudentComponent  },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'templatedriven', component: TemplateDrivenComponent },
  { path: 'httpclient', component: HttpclientComponent },
  {
    path: 'pipe', component: PipeComponent,
    children: [
      { path: 'childrenroute', component: ChildrenRouteComponent }
    ]
  },
  { path: 'dependencyservice', component: DependencyServicesComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
