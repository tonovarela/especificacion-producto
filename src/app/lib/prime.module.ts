import { NgModule } from "@angular/core";
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ScrollTopModule } from 'primeng/scrolltop';


@NgModule({ 
    exports: [MultiSelectModule,ToastModule,ScrollTopModule]
    
   })
export class PrimeModule { }