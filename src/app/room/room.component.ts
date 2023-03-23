import { HttpEventType } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import { roomDetails } from 'src/interfaces/common';
import { roomsAvailability } from '../Data/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit, AfterViewInit, AfterViewChecked {
  totalNumberOfRooms = 10;
  isRoomsTableVisible = true;
  roomsList: roomDetails[] = [];
  roomsAvailability = roomsAvailability;
  selectedRoom: any;
  title = 'Room List';
  totalBytes = 0;

  steam = new Observable((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService) {}

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms Header';
    // console.log(this.headerComponent);
    console.log((this.headerChildrenComponent.last.title = 'Last Title'));
  }
  // ngDoCheck(): void {
  //   console.log('on changes is called');
  // }

  ngOnInit() {
    // console.log(this.headerComponent);
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomsList = rooms;
    });

    this.steam.subscribe({
      next: (data) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log('steam completed'),
    });
  }

  toggleRoomsTable() {
    this.isRoomsTableVisible = !this.isRoomsTableVisible;
    this.title = 'Rooms LIst';
  }

  selectRoom(selectedRoom: roomDetails) {
    console.log(selectedRoom);
    this.selectedRoom = selectedRoom;
  }

  addRoom() {
    const newRoom: roomDetails = {
      // roomNumber: '104',
      amenities: 'Wi-fi, A.C, Swimming Pool',
      photos:
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 5000,
      roomType: 'Luxury',
      checkInTime: new Date('21-mar-2023'),
      checkOutTime: new Date('22-mar-2023'),
      rating: 3.78,
    };

    this.roomsService.addRoom(newRoom).subscribe((roomlist) => {
      this.roomsList = roomlist;
    });

    // this.roomsList = [...this.roomsList, newRoom];
    // this.roomsList.push(newRoom);
  }

  editRoom() {
    this.roomsService
      .updateRoom({
        roomNumber: '103',
        amenities: 'Wi-fi, A.C, Swimming Pool',
        photos:
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 5000,
        roomType: 'Luxury',
        checkInTime: new Date('21-mar-2023'),
        checkOutTime: new Date('22-mar-2023'),
        rating: 3.78,
      })
      .subscribe((roomList) => {
        this.roomsList = roomList;
      });
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe((roomList) => {
      this.roomsList = roomList;
    });
  }

  getPhotos() {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }
      }
    });
  }
}
