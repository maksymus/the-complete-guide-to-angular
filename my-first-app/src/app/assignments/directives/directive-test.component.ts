import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent implements OnInit {

  visible = false;
  clickLog = '';
  clickCount = 0;

  constructor() { }

  ngOnInit() {
  }

  toggleDetails(event: Event) {
    this.visible = !this.visible;
    this.clickCount++;
    this.clickLog = event.timeStamp.toString();
  }

}
