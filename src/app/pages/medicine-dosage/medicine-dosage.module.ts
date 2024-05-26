import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineDosageRoutingModule } from './medicine-dosage-routing.module';
import { MedicineDosageComponent } from '../medicine-dosage/medicine-dosage.component';


@NgModule({
  declarations: [
    MedicineDosageComponent
  ],
  imports: [
    CommonModule,
    MedicineDosageRoutingModule
  ]
})
export class MedicineDosageModule { }
