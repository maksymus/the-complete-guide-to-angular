import {LoggingService} from "./logging.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class AccountService {
  constructor(private loggingService: LoggingService) {}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  accountAddedEvents = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);

    this.accountAddedEvents.emit(status);
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
