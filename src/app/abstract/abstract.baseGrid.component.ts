import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { PageSettingsModel, FilterSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { SynfusionModule } from '@app/lib/synfusion.module';





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
    heightGrid: number = 0;



    protected iniciarResizeGrid(porcentaje: number) {
        if (window.innerHeight >=1000){
            porcentaje = 0.23;
        }
        this.heightGrid = window.innerHeight - (window.innerHeight * porcentaje);
        // const subs1 = fromEvent(window, 'resize').subscribe(() => {
        //         if (window.innerHeight >=1000){
        //         porcentaje = 0.23;
        //     }
        //     this.heightGrid = window.innerHeight - (window.innerHeight * porcentaje);
        //     this.dataBound();
        // });        
        // this.subsriptions.push(subs1);
    }

    ngOnDestroy(): void {
        this.subsriptions.forEach(s => s.unsubscribe());
    }


    protected dataBound() {

        if (!this.autoFitColumns) {
            return;
        }
        this.grid.resizeSettings = { mode: 'Auto' }
        this.grid.autoFitColumns();
        if (window.innerWidth < 2000) {
            this.grid.autoFitColumns();
        } else {
            this.grid.resizeSettings = { mode: 'Auto' }
        }
    }

}