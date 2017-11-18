import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers: boolean = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  servers = ['Test Service', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
      }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!!! Name: ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
