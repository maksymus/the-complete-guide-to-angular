import { Component, OnInit } from '@angular/core';

import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    const subscription = myNumbers.subscribe((num: number) => { console.log(num); });
    setTimeout(() => { subscription.unsubscribe() }, 5000);


    //----------------------------------------------------------------------------------
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => { observer.next('first package'); }, 2000);
      setTimeout(() => { observer.next('second package'); }, 4000);
      // setTimeout(() => { observer.error('does not work'); }, 5000);
      setTimeout(() => { observer.complete(); }, 6000);
    });

    myObservable.subscribe(
      (data: string) => { console.log('Data: ' + data); },
      (err: string) => { console.log('Error: ' + err); },
      () => { console.log('Completed!!!!'); }
    );
  }

}
