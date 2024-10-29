import { Component, Input } from '@angular/core';
import { Bitacora } from '@app/model/solicitud.response';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent {
 @Input() eventos :Bitacora[] = [];
 

}
