import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrl: './form-switch.component.css'
})
export class FormSwitchComponent {

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() labelOn: string = 'Aplica';
  @Input() labelOff: string = 'No aplica';

  @Input() form: string = '';
  formParent!: FormGroup;    
    constructor(private rootFormGroup: FormGroupDirective
    ) {}
    ngOnInit(): void {
      console.log(this.formParent);
      this.formParent = this.rootFormGroup.control.get(this.form) as FormGroup;              
    }

}
