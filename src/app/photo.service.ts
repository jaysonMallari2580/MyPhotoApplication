import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http: HttpClient) { }

 

  getHeaders() {
    var headers = {
      'idToken': localStorage.getItem('userIdToken')
    }
    return headers;
  }

  getPhoto(photoId: string) {
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL + "photos/" + photoId, { headers });
  }

  getComments(photoId: string) {
    var headers = this.getHeaders();
    return this.http.get(environment.API_BASE_URL + "photos/" + photoId + "/comments", { headers });
  }

  makeProfilePhoto(photoUrl : string) {
    var headers = this.getHeaders();
    var params = new HttpParams().set('photoUrl', photoUrl);

    return this.http.put(environment.API_BASE_URL + "users/me/profilePhoto", params, { headers }); 

  }

  makeCoverPhoto(photoUrl: string, albumId: string) {
    var headers = this.getHeaders();
    var params = new HttpParams()
    .set('photoUrl', photoUrl)
    .set('id', albumId);


    return this.http.put(environment.API_BASE_URL + "albums/coverPhoto", params, { headers });

  }



}
