import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  canDeactivateMethod(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit)
      return true;

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved)
      return confirm("Do you want to loose changes???");

    return true;
  }

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //    http://localhost:4200/servers/:id/edit?allowEdit=1#loading
    // console.log(this.route.snapshot.params);        // :id
    // console.log(this.route.snapshot.queryParams);   // ?allowEdit=1
    // console.log(this.route.snapshot.fragment);      // #loading

    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.route.params.subscribe((param: Params) => {
      this.server = this.serversService.getServer(+param['id']);
    });

    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1';
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;

    this.router.navigate(["../", {relativeTo: this.route}]);
  }

}
