import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent,
  children: [
    {path: 'list', component: ReactiveFormComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  {path: 'driven-form', component: DrivenFormComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'prime-ng', component: PrimeNGComponent},
  {path: 'product', component: ProductListComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
