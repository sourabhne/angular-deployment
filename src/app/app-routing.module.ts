import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CompanyComponent } from './company/company.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: TestComponent},
  { path: 'test', component: TestComponent},
  { path: 'company', component: CompanyComponent, data: {reuseRoute : true}},
  { path: 'details/:username', component: CompanydetailsComponent, data: {reuseRoute : true}},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
