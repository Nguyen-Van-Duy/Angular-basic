import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxjsComponent } from './rxjs.component';
import { CommonModule } from '@angular/common';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { FormEventComponent } from './form-event/form-event.component';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RxjsComponent,
    FormEventComponent
  ],
  imports: [
    NgSelectModule,
    // ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RxjsRoutingModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [
  ]
})
export class RxjsModule { }
