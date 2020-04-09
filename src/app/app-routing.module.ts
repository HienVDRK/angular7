import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DetailComponent } from './student/detail/detail.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'templatedriven', component: TemplateDrivenComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
