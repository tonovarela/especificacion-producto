import {  Component, Input } from '@angular/core';
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
      this.formParent = this.rootFormGroup.control.get(this.form) as FormGroup;                    
      if (this.formParent.get(this.name)?.value === '1' || this.formParent.get(this.name)?.value === true){
        this.formParent.get(this.name)!.setValue(true);
       }else{
        this.formParent.get(this.name)!.setValue(false);
       }
    }



}
