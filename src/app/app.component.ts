import { Component } from '@angular/core';
import { userRoleType } from 'src/interfaces/common';
import { role } from './Data/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular BrushUp';
  userRoles = role;
  userRole: userRoleType = role.admin;
}
