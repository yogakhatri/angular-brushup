import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { userRoleType } from 'src/interfaces/common';
import { role } from './Data/common';
import { LocalStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { RoomComponent } from './room/room.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // when we use ViewChild static property is false by default

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomComponent);
  //   componentRef.instance.totalNumberOfRooms = 50;
  // }
  ngOnInit(): void {
    this.loggerService?.log('from app component');
    console.log(this.name.nativeElement);
    this.name.nativeElement.innerText = 'Hello world';
  }
  title = 'Angular BrushUp';
  userRoles = role;
  userRole: userRoleType = role.admin;

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: Storage
  ) {
    this.localStorage.setItem('name', 'yogesh Khatri');
  }
}
