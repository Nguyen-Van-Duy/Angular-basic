import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DrivenFormComponent } from './driven-form/driven-form.component';
// import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DemoMuiComponent } from './demo-mui/demo-mui.component';
import { InAppFormComponent } from './in-app-form/in-app-form.component';

const routes: Routes = [
  {path: '',
  pathMatch: 'full',
  redirectTo: 'home',
},
  {
    path: 'home',
    // component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {path: 'demo-mui', component: DemoMuiComponent},
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
  {path: 'in-app-form', component: InAppFormComponent},
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
