import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { DosageDataService } from './dosage-data.service';
import { MatDialog } from '@angular/material/dialog';

import { DosageFormComponent } from '../dialog/dosage-form/dosage-form.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  constructor(public dialog: MatDialog, public fb: FormBuilder) {}
  medicine_form: FormGroup = this.fb.group({
    medicine_name: ['', Validators.required],
  });

  // dosageform() {
  //   const dialog = this.dialog.open(DosageFormComponent, {
  //     panelClass: 'dosageclass',
  //   });
  //   dialog.afterClosed().subscribe((result) => {
  //     console.log(result);
  //   });
  // }

  mydialog() {
    const dialog = this.dialog.open(DosageFormComponent, {
      panelClass: 'dosageform',
      data: this.medicine_form?.value,
    });
    dialog.afterClosed().subscribe((result: any) => {
      console.log(result);
    });

    console.log(this.medicine_form.value);
  }
}
