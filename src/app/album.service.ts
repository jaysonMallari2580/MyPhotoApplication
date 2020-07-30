import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http: HttpClient) { }

  getAllAlbums() {
    var headers = this.getHeaders();
    console.log("Calling all Albums with headers: ", headers);
    return this.http.get(environment.API_BASE_URL + "albums/all", { headers });
    
  }

  getHeaders() {
    var headers = { 'idToken': localStorage.getItem('userIdToken') }
    return headers;
  }

  getPhotos(albumId: string) {
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL + "albums/" + albumId + "/photos", { headers });
  }

  getAllPhotos() {
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL + "photos", { headers });
  }

  getAlbums() {
    var headers = this.getHeaders();
    console.log("Calling specific albums with headers: ", headers);
    return this.http.get(environment.API_BASE_URL + "albums", { headers });
  }


}


