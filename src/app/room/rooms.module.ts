import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RoomComponent } from './room.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomComponent,
    RoomsListComponent,
  ],
  imports: [CommonModule, RoomsRoutingModule, FormsModule, HeaderModule],
})
export class RoomsModule {}
