import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('assignmentForm')
  private assignmentForm: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.assignmentForm.value);
    this.assignmentForm.reset();
  }
}
