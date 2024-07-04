import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dosage-form',
  templateUrl: './dosage-form.component.html',
  styleUrls: ['./dosage-form.component.scss'],
})
export class DosageFormComponent implements OnInit {
  mobile: boolean = false;
  dosageChips: Array<number> = [0, 0.5, 1, 1.5, 2, 3, 4, 5];
  durationChips: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  notes_upperchip: any = [];
  notessArray: Array<any> = [
    'Before Food',
    'After Food',
    'Empty Stomach',
    'Morning',
    'AfterNoon',
    'Night',
  ];
  notesUpperArray: Array<any> = [];
  delete: boolean = false;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DosageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public medicine_name: any
  ) {}

  MedicationForm: FormGroup = this.fb.group({
    medicationform_array: this.fb.array([]),
  });

  get getControls(): FormArray {
    return this.MedicationForm.controls['medicationform_array'] as FormArray;
  }
  chipcontrols(i: any): FormArray {
    return this.getControls.controls[i].get('instruction') as FormArray;
  }

  ngOnInit() {
    this.addSingleForm();
    console.log(this.medicine_name);
  }

  addSingleForm() {
    const constForm = this.MedicationForm.get(
      'medicationform_array'
    ) as FormArray;

    constForm.push(
      this.fb.group({
        dosage_type: ['MAN', Validators.compose([Validators.required])],
        frequency1: [0, Validators.compose([Validators.required])],
        frequency2: [0, Validators.compose([Validators.required])],
        frequency3: [0, Validators.compose([Validators.required])],
        duration: ['', Validators.compose([Validators.required])],
        duration_type: ['', Validators.compose([Validators.required])],
        custom_dosage: [false],
        instruction: this.fb.array([]),
        // sos_dosage: [''],
        // others_dosage: [''],
      })
    );

    if (constForm.length > 1) {
      this.delete = true;
    }
  }

  checkDigit(e: any, pos: any) {
    console.log(e);
    if (pos == 1) {
      if (e.keyCode === 190 || e.keyCode === 69) {
        e.preventDefault();
      }
    }
    if (pos == 2) {
      if (e.keyCode === 190 || e.keyCode === 69) {
        e.preventDefault();
      }
    }
    if (pos == 3) {
      if (e.keyCode === 190 || e.keyCode === 69) {
        e.preventDefault();
      }
    }

    if (pos == 4) {
      if (e.keyCode === 190 || e.keyCode === 69) {
        e.preventDefault();
      }
    }
  }
  backtoDosage(i: any) {
    const formarray = this.MedicationForm.get(
      'medicationform_array'
    ) as FormArray;
    if (
      formarray.controls[i].get('frequency1')?.value == null ||
      formarray.controls[i].get('frequency2')?.value == null ||
      formarray.controls[i].get('frequency3')?.value == null
    ) {
      formarray.controls[i].get('frequency1')?.setValue(0);
      formarray.controls[i].get('frequency2')?.setValue(0);
      formarray.controls[i].get('frequency3')?.setValue(0);
    }
  }
  isSelected(i: any, type: string) {
    const formarray = this.MedicationForm.get(
      'medicationform_array'
    ) as FormArray;
    let dosage_Array: Array<any> = [];
    this.dosageChips.forEach((element: any) => {
      dosage_Array.push(element);
    });

    if (type === 'morning') {
      if (
        dosage_Array.includes(formarray.controls[i].get('frequency1')?.value)
      ) {
        return 'CUSTOM';
      } else {
        return formarray.controls[i].get('frequency1')?.value;
      }
    }

    if (type === 'afternoon') {
      if (
        dosage_Array.includes(formarray.controls[i].get('frequency2')?.value)
      ) {
        return 'CUSTOM';
      } else {
        return formarray.controls[i].get('frequency2')?.value;
      }
    }

    if (type === 'night') {
      if (
        dosage_Array.includes(formarray.controls[i].get('frequency3')?.value)
      ) {
        return 'CUSTOM';
      } else {
        return formarray.controls[i].get('frequency3')?.value;
      }
    }
  }

  instruct(items: any, i: number) {
    console.log(items);
    console.log(i);

    const formarray = this.MedicationForm.get(
      'medicationform_array'
    ) as FormArray;
    console.log(formarray);
    let formupperchip = formarray.controls[i].get('instruction') as FormArray;
    formupperchip.push(
      this.fb.group({
        name: [items, Validators.required],
      })
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }

  saveForm() {
    console.log(this.MedicationForm.value);
  }
  deleteField(i: any) {
    console.log(i);
    const formarrays = this.MedicationForm.get(
      'medicationform_array'
    ) as FormArray;

    formarrays.removeAt(i);
  }
}
