import { Component, EventEmitter, Input, Output } from '@angular/core';
import { roomDetails } from 'src/interfaces/common';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  @Input() roomsList: roomDetails[] = [];
  @Input() isRoomsTableVisible: boolean = true;

  @Output() selectedRoom = new EventEmitter<roomDetails>();

  selectRoom(selectedRoom: roomDetails) {
    this.selectedRoom.emit(selectedRoom);
  }
}
