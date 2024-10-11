import { Component, Input } from '@angular/core';
import {   FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {
 @Input() label: string = '';
 @Input() name: string = '';
 @Input() form: string = '';
formParent!: FormGroup;
  //control! :AbstractControl
  constructor(
    private rootFormGroup: FormGroupDirective
  ) {}
  ngOnInit(): void {
    this.formParent = this.rootFormGroup.control.get(this.form) as FormGroup;
    //this.control = this.form.controls[this.name];
    //console.log(this.control.value)
    
  }
}