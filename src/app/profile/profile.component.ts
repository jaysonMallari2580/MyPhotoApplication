import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = "User Profile";
  imgUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  likeCount = 0;
  name = "Jayson";
  list = ["item1", "item2", "item3"];

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.likeCount++;
  }

}
