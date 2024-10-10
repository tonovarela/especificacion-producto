import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  //form: FormGroup | null = null;
  @Output() valueChange = new EventEmitter<string>();

  control: FormControl = new FormControl('', Validators.required);

  get value(): string {
    return this.control.value;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }



  // get value(): string {
  //   return this.control.value;
  // }

  // set value(val: string) {
  //   console.log(val);
  //   this.control.setValue(val);
  //   this.valueChange.emit(val);
  // }
}
