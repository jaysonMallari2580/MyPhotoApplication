import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPhotoApplication';

  email: String;
  password: String;

  constructor(public userService: UserService) {

  }

  signOut() {
    this.userService.logout();
    this.email = "";
    this.password = "";
  }


}
