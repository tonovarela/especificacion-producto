import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileModel } from '@app/model/file.interface';

@Component({
  template: '',
  standalone:true,  
    
})
export abstract class AbstractSeccionComponent  {
   
@Input({required:true}) formGeneral: FormGroup = new FormGroup({});
  protected formGroupName(name:string) {    
    return this.formGeneral.get(name) as FormGroup
  }


  addFile(file:FileModel,nameGroup:string,nameField:string) {  
    
    const reference = this.formGroupName(nameGroup).get(nameField);
    const previosValues = reference?.value ?? []; 
          reference?.setValue([...previosValues,file]);    
   }
  
   removeFile(file:FileModel,nameGroup:string,nameField:string) {    
    const reference = this.formGroupName(nameGroup).get(nameField);
    const newValues= reference?.value.filter((f:FileModel) => f.id !== file.id);
    this.formGroupName(nameGroup).get(nameField)?.setValue(newValues);
  
   }
  
  
}
