import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ShowsComponent } from './shows/shows.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ShowsComponent},
  { path: 'add', component: AddComponent},
  { path: 'edit', component: EditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
