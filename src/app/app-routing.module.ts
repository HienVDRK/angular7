import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DetailComponent } from './student/detail/detail.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
