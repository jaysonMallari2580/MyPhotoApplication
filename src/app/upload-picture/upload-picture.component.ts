import { Component, OnInit, Injectable } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../Album';
import { Router } from '@angular/router';
import { AlbumDetailsComponent } from '../album-details/album-details.component';


@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {

 

  constructor(private albumService: AlbumService, private router: Router) { }

  albums: Album[];
  num = 1;

  ngOnInit(): void {

    this.albumService.getById().subscribe(
      response => {
        this.albums = <Album[]>response;
        console.log("get all album respone", this.albums);
      }
    );
    
  }

  goback() {

    this.router.navigate(['album', this.albums[this.num].id]);
  }
 

}
