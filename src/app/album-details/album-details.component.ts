import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../Album';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  

  constructor(private albumService: AlbumService, private router: Router) { }

  albums: Album[];

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(
      response => {
        this.albums = <Album[]>response;
        console.log("get all album respone", this.albums);
      }
    );
  }

  uploadPhoto(id): void {
    this.router.navigate(['upload', id]);
    this.passId();
  }

  albumDetailsClick(id): void {
    this.router.navigate(['album', id]);
  }

   passId(): number {
    return 1;
  }
}


