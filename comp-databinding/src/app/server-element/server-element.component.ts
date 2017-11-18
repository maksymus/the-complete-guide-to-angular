import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input() element: { type: string; name: string, content: string };

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called')
  }

}
