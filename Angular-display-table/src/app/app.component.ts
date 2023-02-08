import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show: boolean = false;
  title = 'myapp';
  userData: any = [];

  constructor(private user: UsersService) {
    this.user.getData().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }

  disp() {
    this.show = !this.show;
  }
}
