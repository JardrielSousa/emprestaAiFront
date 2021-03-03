import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadReadComponent } from './load-read/load-read.component';

const routes: Routes = [
  {path: '',   redirectTo: '/loan', pathMatch: 'full' },
  { path: 'loan', component: FormComponent },
  { path: 'consult', component: LoadReadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
