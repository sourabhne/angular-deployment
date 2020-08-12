import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSingleComponent } from './user-single/user-single.component';


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: {reuseRoute : true}
  },
  {
    path: ':username',
    component: UserSingleComponent,
    data: {reuseRoute : true}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
