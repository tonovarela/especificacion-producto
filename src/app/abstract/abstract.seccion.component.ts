import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileModel } from '@app/model/file.interface';

@Component({
  template: '',
  standalone: true,

})
export abstract class AbstractSeccionComponent {

  @Input({ required: true }) formGeneral: FormGroup = new FormGroup({});
  @Input({ required: true }) formName: string = '';

  protected get formGroupName() {
    return this.formGeneral.get(this.formName) as FormGroup
  }


  protected get isDisabledForm() {
    return this.formGroupName.disabled;
  }


  protected addFile(file: FileModel, nameField: string) {

    const reference = this.formGroupName.get(nameField);
    const previosValues = reference?.value ?? [];
    reference?.setValue([...previosValues, file]);
  }

  protected removeFile(file: FileModel, nameField: string) {
    const reference = this.formGroupName.get(nameField);
    const newValues = reference?.value.filter((f: FileModel) => f.id !== file.id);
    this.formGroupName.get(nameField)?.setValue(newValues);

  }

  protected obtenerArchivos(nameField: string): FileModel[] {    
    return this.formGroupName.get(nameField)?.value ?? [];
  }


}
