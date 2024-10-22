import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileModel } from '@app/model/file.interface';
import Compressor from 'compressorjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})

export class FileUploadComponent implements OnInit {
  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }



  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() filesUploaded: FileModel[] = [];
  @Input() label: string = 'Seleccionar archivo';
  



  @Output() onAdd = new EventEmitter<FileModel>();
  @Output() onRemove = new EventEmitter<FileModel>();
  responsiveOptions: any[] | undefined;

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
     console.log(file.size);
     if (file.size > 10000000) { // 10MB en bytes
      alert("El archivo es muy pesado, por favor seleccione una imagen de menor tamaño");
      continue;
     }
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
