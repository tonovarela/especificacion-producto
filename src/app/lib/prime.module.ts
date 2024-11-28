import { NgModule } from "@angular/core";
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({ 
    exports: [MultiSelectModule,ToastModule,ScrollTopModule,TooltipModule]
    
   })
export class PrimeModule { }