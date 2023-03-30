import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomsService } from 'src/app/services/rooms.service';
import { roomDetails } from 'src/interfaces/common';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  constructor(private roomService: RoomsService) {}

  room: roomDetails = {
    roomType: 'Economy',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
    roomNumber: '',
  };

  successMessage: string = '';

  addRoom(roomForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      console.log(data);
      this.successMessage = 'Room added successfully.';
      roomForm.resetForm({
        roomType: 'Economy',
        amenities: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
        roomNumber: '',
      });
    });
  }
}
