import {
  AfterContentInit,
  Component,
  ContentChild,
  Host,
  ViewChild,
} from '@angular/core';
// import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService],
})
export class ContainerComponent implements AfterContentInit {
  // @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  // 4 types of resolution Modifiers.
  // Self
  // SkipSelf
  // Optional
  // Host

  constructor(@Host() roomsService: RoomsService) {}

  ngAfterContentInit(): void {
    // console.log(this.employee);
    // this.employee.empName = 'name wick';
  }
}
