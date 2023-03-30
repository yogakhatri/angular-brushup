import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private route: Router) {}

  email: string = '';
  password: string = '';

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      alert('Login successfully');
      // this.route.navigate(['/room', 'add']);
      this.route.navigateByUrl('/rooms/add')
    }
  }
}
