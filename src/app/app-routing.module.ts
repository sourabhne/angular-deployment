import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: TestComponent},
  { path: 'test', component: TestComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), data: {key: true} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
