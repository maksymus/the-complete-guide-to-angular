import {Effect, Actions} from '@ngrx/effects';
import {Injectable} from "@angular/core";

import * as firebase from 'firebase';
import {fromPromise} from "rxjs/observable/fromPromise";

import {
  SET_TOKEN, SetToken, Signin, SIGNIN, SIGNUP, TRY_SIGNIN, TRY_SIGNUP, TrySignin,
  TrySignup
} from "./auth.actions";

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(TRY_SIGNUP)
    .map((action: TrySignup) => { return action.payload; })
    .switchMap(payload => {
      const authPromise = firebase.auth().createUserWithEmailAndPassword(payload.username, payload.password);
      return fromPromise(authPromise);
    })
    .switchMap(() => {
      const authTokenPromise = firebase.auth().currentUser.getToken();
      return fromPromise(authTokenPromise);
    })
    .mergeMap((token) => {
      return [
        {
          type: SIGNUP
        },
        {
          type: SET_TOKEN,
          payload: token
        }
      ];
    });

  @Effect()
  authSignin = this.actions$
    .ofType(TRY_SIGNIN)
    .map((action: TrySignin) => { return action.payload; })
    .switchMap(payload => {
      const authPromise = firebase.auth().signInWithEmailAndPassword(payload.username, payload.password);
      return fromPromise(authPromise);
    })
    .switchMap(() => {
      const authTokenPromise = firebase.auth().currentUser.getToken();
      return fromPromise(authTokenPromise);
    })
    .mergeMap((token) => {
      return [
        {
          type: SIGNIN
        },
        {
          type: SET_TOKEN,
          payload: token
        }
      ];
    });



  constructor(private actions$: Actions) {}
}
