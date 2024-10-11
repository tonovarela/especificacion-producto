import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  template: '',
  standalone:true,  
    
})
export abstract class AbstractSeccionComponent  {
   
@Input({required:true}) formGeneral: FormGroup = new FormGroup({});
  protected formGroupName(name:string) {    
    return this.formGeneral.get(name) as FormGroup
  }
  
  
}
