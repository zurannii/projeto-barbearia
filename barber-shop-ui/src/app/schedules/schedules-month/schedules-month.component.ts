import { Component } from '@angular/core';
import { NewClientComponent } from "../../clients/new-client/new-client.component";

@Component({
  selector: 'app-schedules-month',
  imports: [NewClientComponent],
  templateUrl: './schedules-month.component.html',
  styleUrl: './schedules-month.component.css'
})
export class SchedulesMonthComponent {
monthSchedule: any;

}
