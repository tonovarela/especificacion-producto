import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent implements OnInit {
  ngOnInit(): void {
   console.log(this.multiple);
  }
  filesUploaded: string[] = [];
  @Input() multiple: boolean = false;
  appendFiles(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          this.filesUploaded.push(base64);          
          // this.formGeneral.patchValue({
          //   file: {
          //     name: file.name,
          //     type: file.type,
          //     size: file.size,
          //     base64,
          //   },
          // });
        };
        reader.readAsDataURL(files[i]);
      }

    }

  }

}
