import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileModel } from '@app/model/file.interface';
import { environment } from '@env/environment.development';



@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})

export class FileUploadComponent  implements OnInit {
  ngOnInit(): void {   
    // this.filesUploaded = this.filesUploaded.map((file: FileModel) => {
    //   return { ...file, documento:`${environment.apiUrl}/documento/${file.id_documento}` };
    // }); 
  }
  
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() filesUploaded: FileModel[] = [];
  @Input() label: string = 'Seleccionar archivo';
  @Input() cargandoImagenes :boolean = false;


  
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
          const file: FileModel = {id_documento:Math.random().toString(36).substring(7), nombre: files[i].name, documento: base64};    
          this.onAdd.emit(file);                    
          
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  quitarImagen(file:FileModel) {      
    
    this.onRemove.emit(file);

  }

}
