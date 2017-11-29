import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService implements OnInit {

  token: string;

  constructor() { }

  ngOnInit(): void {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        firebase.auth().currentUser.getToken().then(
          token => this.token = token);
      })
      .catch((error) => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      token => this.token = token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
