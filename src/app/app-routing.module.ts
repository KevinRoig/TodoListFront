import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/thingstodo', pathMatch: 'full' },
  { path: 'thingstodo', component: ThingsToDoComponent },
 // { path: 'thingstodo/:id', component: ThingsToDoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
