import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB-on8Pi9Q-nhVg0VUEJKV0JBnQ7YIoJeE',
      authDomain: 'ng-complete-guide-74b69.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
