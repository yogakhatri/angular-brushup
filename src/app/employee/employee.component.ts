import { Component, Self } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService],
})
export class EmployeeComponent {
  constructor(@Self() private roomsService: RoomsService) {}

  empName: string = 'John';
}
