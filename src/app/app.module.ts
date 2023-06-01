import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BoldDirective } from './Directives/bold.directive';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ServerHttpService} from "./Services/server-http.service";
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGComponent } from './prime-ng/prime-ng.component'
import {ButtonModule} from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConvertNumberPipe } from './convert-number.pipe';
import { ListProductComponent } from './list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    BoldDirective,
    DrivenFormComponent,
    ReactiveFormComponent,
    RegisterComponent,
    PrimeNGComponent,
    ConvertNumberPipe,
    ListProductComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CalendarModule,
  ],
  providers: [ServerHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
