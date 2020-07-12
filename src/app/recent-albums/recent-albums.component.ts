import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../Album';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.css']
})
export class RecentAlbumsComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  albums: Album[];

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe(
      response => {
        this.albums = <Album[]>response;
        console.log("got all album response", this.albums);
      }
    );
  }

}
