import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../services/logging.service";
import {AccountService} from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountService) {

  }

  onSetTo(status: string) {
    this.accountsService.changeStatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
