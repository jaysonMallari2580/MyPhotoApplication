import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{

  user: Observable<firebase.User>;

  canActivate(): boolean {

    if (this.firebaseAuth.auth.currentUser != null) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      userInfo => {
        console.log("userInfo: ", userInfo);
        this.storeIdToken(userInfo.getIdToken());
      }
    );
  }

  storeIdToken(idToken: Promise<string>) {
    idToken.then(
      idTokenValue => {
        localStorage.setItem('userIdToken', idTokenValue);
        console.log("id token value: ", idTokenValue);
      }
    )
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['albums/recent']);
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['albums/recent']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message); 
      });
  }

  logout() {
    this.router.navigate(['login']);
    this.firebaseAuth
      .auth
      .signOut();
    localStorage.clear();
  }

}
