import { Component, OnDestroy, ViewChild } from '@angular/core';
import {  Subscription } from 'rxjs';
import { L10n } from '@syncfusion/ej2-base';
import { PageSettingsModel, FilterSettingsModel, GridComponent, Column } from '@syncfusion/ej2-angular-grids';
import { SynfusionModule } from '@app/lib/synfusion.module';

L10n.load({
  'en-US': {
    grid: {
      ChooseColumns: 'Mostrar / Ocultar ',
      Columnchooser: 'Columnas',
    },
  },

});

interface ColumnsChosse {
    uid: string;
    visible: boolean;
  }
  


@Component({
    template: '',
    standalone: true,
    imports: [SynfusionModule]
})
export abstract class AbstractBaseGridComponent implements OnDestroy {
    @ViewChild('grid') protected grid!: GridComponent;
    protected autoFitColumns: boolean = true;
    //protected windowService = inject(WindowService);
    protected pageSettings: PageSettingsModel = { pageSizes: true, pageSize: 30 };
    protected filterSettings: FilterSettingsModel = { type: "CheckBox" };
    protected subsriptions: Subscription[] = [];
 



 
    ngOnDestroy(): void {
        this.subsriptions.forEach(s => s.unsubscribe());
    }


     public begin(args: any) {    
        if (args.requestType == "refresh") {      
          this.refreshColumnsChoosen();
        } 
       
      }
    
    
      public complete(args: any) {
        
        if (args.requestType == "columnstate") {
          {
            const columns: Column[] = this.grid.getColumns();        
            const columnsInChooser = columns
              .filter((column: Column) => column.showInColumnChooser === true)
              .map(({ uid, visible }: Column) => ({ uid, visible }));
            localStorage.setItem('columnsInChooser', JSON.stringify(columnsInChooser));
          }
        }
      }


    protected dataBound() {

        
        //console.log(this.grid.getColumns());
        //this.grid.getColumnByField('nombre').visible=false;
        //this.grid.refreshColumns();
        this.grid.resizeSettings = { mode: 'Auto' }
        this.grid.autoFitColumns();
        if (window.innerWidth < 2000) {
            this.grid.autoFitColumns();
        } else {
            this.grid.resizeSettings = { mode: 'Auto' }
        }
    }


    private refreshColumnsChoosen() {
        if (localStorage.getItem('columnsInChooser')) {
          const columnsInChooser = JSON.parse(localStorage.getItem('columnsInChooser')!);
          columnsInChooser.forEach((column: ColumnsChosse) => {
            const col=this.grid.getColumnByUid(column.uid);
            if (col){
              col.visible = column.visible;
            }            
            
          });
          this.grid.refreshHeader();      
        }
      }

}