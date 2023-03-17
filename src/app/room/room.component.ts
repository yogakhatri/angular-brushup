import { Component, OnInit } from '@angular/core';
import { roomDetails } from 'src/interfaces/common';
import { roomsAvailability } from '../Data/common';
import { roomsList } from '../Data/roomsList';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  totalNumberOfRooms = 10;
  isRoomsTableVisible = true;
  roomsList: roomDetails[] = [];
  roomsAvailability = roomsAvailability;

  constructor() {}

  ngOnInit() {
    this.roomsList = roomsList;
  }

  toggleRoomsTable() {
    this.isRoomsTableVisible = !this.isRoomsTableVisible;
  }

  selectRoom(selectedRoom: roomDetails) {
    console.log(selectedRoom);
  }
}
