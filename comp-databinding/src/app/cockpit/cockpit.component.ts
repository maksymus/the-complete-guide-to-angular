import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(nameInput);

    this.serverCreated.emit(
      {serverName: nameInput.value, serverContent: contentInput.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {serverName: nameInput.value, serverContent: contentInput.value});
  }
}
