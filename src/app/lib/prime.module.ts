import { NgModule } from "@angular/core";
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
@NgModule({ 
    exports: [MultiSelectModule,ToastModule]
    
   })
export class PrimeModule { }