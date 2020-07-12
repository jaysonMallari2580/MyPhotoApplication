import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }

  getAllPhotos() {
    var headers = this.getHeaders();
    return this.http.get("http://3.20.59.181:8000/api/photos", { headers });
  }

  getHeaders() {
    var headers = {
      'idToken': localStorage.getItem('userIdToken')
    }
    return headers;
  }
}
