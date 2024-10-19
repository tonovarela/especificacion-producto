import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileModel } from '@app/model/file.interface';
import Compressor from 'compressorjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})

export class FileUploadComponent {



  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() filesUploaded: FileModel[] = [];
  @Input() label: string = 'Seleccionar archivo';
  @Input() cargandoImagenes: boolean = false;



  @Output() onAdd = new EventEmitter<FileModel>();
  @Output() onRemove = new EventEmitter<FileModel>();

  identificador = Math.random().toString(36).substring(7);
  imageLoader = true;


  async comprimirArchivo(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.2,
        convertTypes: [file.type],
        success(result) {
          resolve(result as File);
        },
        error(err) {
          reject(err);
        }
      }
      );
    })
  }

  async appendFiles(event: any) {
    const files = event.target.files
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.includes('image')) {
          continue
        }      
     const file= files[i]
     //console.log("Viejo "+file.size);
     const newFile=  await this.comprimirArchivo(file);    
     //console.log("Nuevo "+newFile.size);
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          const file: FileModel = { id_documento: Math.random().toString(36).substring(7), nombre: newFile.name, documento: base64 };
          this.onAdd.emit(file);

        };
        reader.readAsDataURL(newFile);
      }
    }
  }

  quitarImagen(file: FileModel) {

    this.onRemove.emit(file);

  }

}
