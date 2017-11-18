import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup = null;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      'projectName': this.formBuilder.control(null, Validators.required, CustomValidators.validProjectName),
      'email': this.formBuilder.control(null, [Validators.required, Validators.email]),
      'status': this.formBuilder.control('Stable'),
    });
  }

  onSubmit() {
    console.log(this.projectForm.controls);
  }
}

export class CustomValidators {
  static validProjectName(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() =>{
        if (control.value === 'test') {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
