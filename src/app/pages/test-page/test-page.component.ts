import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  @ViewChild('freq1', { static: false }) private freq1ViewChild?:
    | ElementRef
    | any;
  @ViewChild('freq2') private freq2ViewChild?: ElementRef | any;
  @ViewChild('freq3') private freq3ViewChild?: ElementRef | any;
  dosageChips: Array<number> = [0, 0.5, 1, 1.5, 2, 3, 4, 5];
  custom_array: Array<any> = ['CUSTOM'];
  Time_duration: Array<any> = ['Days(s)', 'Weeks(s)', 'Months(s)', 'Year(s)'];
  duration: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  delete: boolean = true;
  submitted: boolean = false;
  notes_chips: Array<any> = [
    'Before Food',
    'After Food',
    'Follow Nutrition Chart',
    'Empty Stomach',
    'Fasting',
  ];
  inputCntrl: FormControl = new FormControl();
  blank_array: Array<any> = [];
  dosageSections: any = [
    {
      displayname: 'Morning',
      img: 'assets/image/morning.svg',
      dosageChips: [0, 0.5, 1, 1.5, 2, 3, 4, 5],
      btn: 'Custom',
    },
    {
      displayname: 'Afternoon',
      img: 'assets/image/afternoon.svg',
      dosageChips: [0, 0.5, 1, 1.5, 2, 3, 4, 5],
      btn: 'Custom',
    },
    {
      displayname: 'Night',
      img: 'assets/image/evening.svg',
      dosageChips: [0, 0.5, 1, 1.5, 2, 3, 4, 5],
      btn: 'Custom',
    },
  ];
  selectedCustom?: boolean;
  constructor(private fb: FormBuilder) {
    console.log(this.blank_array);
  }

  chipForm: FormGroup = this.fb.group({
    stack_form: this.fb.array([
      this.fb.group({
        dosage: [0, [Validators.required]],
        dosage2: [0, [Validators.required]],
        dosage3: [0, [Validators.required]],
        duration: [1, [Validators.required]],
        time_duration: ['Days(s)', [Validators.required]],
        // input_data: ['', [Validators.required]],
        notes_chips: [''],
        upper_chip: this.fb.array([
          // this.fb.group({
          // id: ['', [Validators.required]],// here the name is adding into the array and default chip was displaying above input field
          // name: ['', [Validators.required]],
          // }),
        ]),
        categoryToggle: ['', [Validators.required]],
        inputfield: [false, [Validators.required]],
        medicineinput: ['', [Validators.required]],
      }),
    ]),
  });

  get stackform(): FormArray {
    return this.chipForm.controls['stack_form'] as FormArray;
  }
  subControl(i: any): FormArray {
    return this.stackform.controls[i].get('upper_chip') as FormArray;
  }

  ChipWindow() {
    console.log('hii');
  }

  savedata() {
    console.log(this.chipForm, 'form data');
    this.submitted = true;
    if (!this.chipForm.valid) {
      console.log('form Invalid');
      return;
    }

    // const forminputdata: Array<any> = (
    //   this.chipForm.get('form_stack') as FormArray
    // ).value;
    // let data_array: Array<any> = [];
    // console.log(forminputdata);

    // const chip_data = this.chipForm.get('dosage')?.value;
    // const dosage_second = this.chipForm.get('dosage2')?.value;
    // const dosage_third = this.chipForm.get('dosage3')?.value;
    // const duration = this.chipForm.get('duration')?.value;
    // const timeduration = this.chipForm.get('time_duration')?.value;
    // const notechips = this.chipForm.get('notes_chips')?.value;

    // console.log(chip_data);
    // console.log(dosage_second);
    // console.log(dosage_third);
    // console.log(duration);
    // console.log(timeduration);

    // console.log(notechips);
  }

  // arraychips() {
  //   const data = this.chipForm.get('notes_chips')?.value;
  //   // console.log(data);
  //   this.blank_array = data;
  //   console.log(this.blank_array);
  //   this.notes_chips.pop();
  // }

  addnewfield() {
    const formarrays = this.chipForm.get('stack_form') as FormArray;

    formarrays.push(
      this.fb.group({
        dosage: [0, [Validators.required]],
        dosage2: [0, [Validators.required]],
        dosage3: [0, [Validators.required]],
        duration: [1, [Validators.required]],
        time_duration: ['Days(s)', [Validators.required]],
        // input_data: ['', [Validators.required]],
        notes_chips: [''],
        upper_chip: this.fb.array([
          // this.fb.group({
          //   // id: ['', [Validators.required]],
          //   name: ['', [Validators.required]],// resion of comment is name blank chip was displaying above input field because of this name was push inro the upper_chip arrray when i click on add new button so i did the array blank and it will pushed when i click on below instructuction i add chip from where when i click on chip function call and chip will add so from instruct function chip will be add only
          // }),
        ]),
        categoryToggle: ['', [Validators.required]],
        inputfield: [false, [Validators.required]],
        medicineinput: ['', [Validators.required]],
      })
    );
    console.log(formarrays);

    if (formarrays.length > 0) {
      this.delete = false;
    }
  }

  instruct(item: any, i: number) {
    const formarrays = this.chipForm.get('stack_form') as FormArray;

    const upperFormArray = formarrays.controls[i].get(
      'upper_chip'
    ) as FormArray;
    upperFormArray.push(
      this.fb.group({
        name: [item, [Validators.required]],
      })
    );
  }

  itemremove(value: any, j: number, i: any) {
    const formarrays = this.chipForm.get('stack_form') as FormArray;

    const upperFormArray = formarrays.controls[i].get(
      'upper_chip'
    ) as FormArray;

    upperFormArray.removeAt(j);
  }
  ChangeSystem() {}

  backToDosage() {
    this.selectedCustom = false;
  }

  checkDigit(event: any, i: any) {
    console.log(event);
    console.log(event.key);
    let custom_dosage1 = event.key;

    const formarray = this.chipForm.get('stack_form') as FormArray;
    const formControl = formarray.controls[i].get('dosage');
    formControl?.setValue(custom_dosage1);

    console.log(formControl);
  }
  customFunction() {
    console.log('hii');
    this.selectedCustom = true;
  }
  deleteField(index: any) {
    console.log('delete me');
    console.log(index);
    const formArray = this.chipForm.get('stack_form') as FormArray;
    formArray.controls.splice(index, 1);
    if (formArray.controls.length == 1) {
      this.delete = true;
      console.log('delete');
      return;
    }
  }
}
