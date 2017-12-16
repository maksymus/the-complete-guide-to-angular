import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {TrySignup} from "../store/auth.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupForm')
  signupForm: NgForm;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(new TrySignup({username: email, password: password}));
    // this.authService.signupUser(email, password);
  }
}
