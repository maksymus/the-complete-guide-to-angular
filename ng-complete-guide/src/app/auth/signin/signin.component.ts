import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {TrySignin} from "../store/auth.actions";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm')
  signinForm: NgForm;

  constructor(private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin() {
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.store.dispatch(new TrySignin({username: email, password: password}));

    // this.authService.signinUser(email, password)
    //   .then(response => this.router.navigate(['/']))
    //   .catch((error) => console.log(error))
    // ;
  }

}
