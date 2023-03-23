export interface rooms {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export type roomType = 'Luxury' | 'Deluxe' | 'Economy';

export type userRoleType = 'admin' | 'user';

export interface roomDetails {
  roomNumber?: string;
  roomType: roomType;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
  rating: number;
}

export interface photoDetails {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
