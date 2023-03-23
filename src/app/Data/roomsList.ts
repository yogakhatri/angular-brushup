import { roomDetails } from 'src/interfaces/common';

export const roomsList: roomDetails[] = [
  {
    roomNumber: '101',
    amenities: 'Wi-fi, A.C, Swimming Pool',
    photos:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 5000,
    roomType: 'Luxury',
    checkInTime: new Date('21-mar-2023'),
    checkOutTime: new Date('22-mar-2023'),
    rating: 3.54556,
  },
  {
    roomNumber: '102',
    amenities: 'Wi-fi, A.C',
    photos:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 3000,
    roomType: 'Deluxe',
    checkInTime: new Date('21-mar-2023'),
    checkOutTime: new Date('22-mar-2023'),
    rating: 4.2,
  },
  {
    roomNumber: '103',
    amenities: 'Wi-fi',
    photos:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price: 1000,
    roomType: 'Economy',
    checkInTime: new Date('21-mar-2023'),
    checkOutTime: new Date('22-mar-2023'),
    rating: 2.8,
  },
];
