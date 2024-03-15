import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'primeng/api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [
  ]
})
export class HomeModule { }
