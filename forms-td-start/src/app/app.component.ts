import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm')
  private signupForm: NgForm;

  answer = '';
  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: '',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
        userData: {
          username: suggestedName,
        },
      });
  }

  onSubmit() {
    console.log(this.signupForm);

    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.submitted = true;

    this.signupForm.reset();
  }

  // onSubmit(signupForm: NgForm) {
  //   console.log(signupForm);
  // }
}
