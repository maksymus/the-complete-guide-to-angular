import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AppState} from "../store/app.reducers";
import {Store} from "@ngrx/store";
import {Logout, SetToken, Signin, Signup} from "./store/auth.actions";

/**
 * Deprecated by Redux state/effects.
 */
@Injectable()
export class AuthService implements OnInit {

  token: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.store.dispatch(new Signup());
        this.fetchToken();
      })
      .catch((error) => console.log(error));
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.store.dispatch(new Signin());
        this.fetchToken();
      });
  }

  logout() {
    firebase.auth().signOut();
    this.store.dispatch(new Logout());
  }

  private fetchToken() {
    firebase.auth().currentUser.getToken().then(
      token => this.store.dispatch(new SetToken(token))
    );
  }
}
