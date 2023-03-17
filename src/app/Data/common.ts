import { rooms, userRoleType } from 'src/interfaces/common';

export const role: { admin: userRoleType; user: userRoleType } = {
  admin: 'admin',
  user: 'user',
};

export const roomsAvailability: rooms = {
  availableRooms: 5,
  bookedRooms: 10,
  totalRooms: 20,
};
