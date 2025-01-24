import { NgModule } from "@angular/core";
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({ 
    exports: [MultiSelectModule,ToastModule,ScrollTopModule,TooltipModule,SelectButtonModule]
    
   })
export class PrimeModule { }