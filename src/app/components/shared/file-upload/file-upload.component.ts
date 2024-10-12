import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileModel } from '@app/model/file.interface';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})

export class FileUploadComponent  implements OnInit {
  ngOnInit(): void {
    //this.multiple=false;
  }
  
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() filesUploaded: FileModel[] = [];
  @Input() label: string = 'Seleccionar archivo';


  
  @Output() onAdd= new EventEmitter<FileModel>();
  @Output() onRemove= new EventEmitter<FileModel>();

  identificador=Math.random().toString(36).substring(7);

 
  appendFiles(event: any) {  
    const files = event.target.files      
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.includes('image') ) {
          continue
        }
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          const file: FileModel = {id:Math.random().toString(36).substring(7), name: files[i].name, base64};
          this.filesUploaded.push(file);                              
          this.onAdd.emit(file);                    
          
        };
        reader.readAsDataURL(files[i]);
      }
    }

  }

  quitarImagen(file:FileModel) {   
   
    this.filesUploaded = this.filesUploaded.filter(f => f.id !== file.id);
    this.onRemove.emit(file);

  }

}
