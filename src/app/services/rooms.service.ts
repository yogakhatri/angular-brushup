import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { photoDetails, roomDetails } from 'src/interfaces/common';
import { AppConfig } from '../AppConfig/appConfig.interface';
import { APP_SERVICE_CONFIG } from '../AppConfig/appConfig.service';
import { roomsList } from '../Data/roomsList';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('rooms sevice is initilized');
    console.log(config.apiEndPoint);
  }

  // rooms: roomDetails[] = roomsList;

  getRooms() {
    // return this.rooms;
    return this.http.get<roomDetails[]>('/api/rooms');
  }

  addRoom(room: roomDetails) {
    return this.http.post<roomDetails[]>('/api/rooms', room);
  }

  updateRoom(room: roomDetails) {
    return this.http.put<roomDetails[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<roomDetails[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request<photoDetails>(req);
  }
}
