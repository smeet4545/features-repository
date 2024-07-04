import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DosageFormComponent } from './dosage-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DosageFormComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class DosageFormModule {}
