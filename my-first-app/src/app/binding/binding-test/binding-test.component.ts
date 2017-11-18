import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-test',
  templateUrl: './binding-test.component.html',
  styleUrls: ['./binding-test.component.css']
})
export class BindingTestComponent implements OnInit {
  username: String = '';

  constructor() { }

  ngOnInit() {
  }

  onClear() {
    this.username = '';
  }
}
