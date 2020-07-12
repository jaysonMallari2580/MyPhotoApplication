import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http: HttpClient) { }

  getAllAlbums() {
    var headers = this.getHeaders();
    return this.http.get("http://3.20.59.181:8000/api/albums/all", { headers });
  }

  getHeaders() {
    var headers = { 'idToken': localStorage.getItem('userIdToken') }
    return headers;
  }

  getById() {
    var headers = this.getHeaders();
   return this.http.get("http://3.20.59.181:8000/api/albums/all", { headers });
  }
}


