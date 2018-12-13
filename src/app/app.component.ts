import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { dotenv } from '../dotenv/dotenv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngmatfire';

  ngOnInit() {
    // initializing firebase
    var config = {
        apiKey: dotenv.FIREBASE_CONFIG.apiKey,
        authDomain: dotenv.FIREBASE_CONFIG.authDomain,
        databaseURL: dotenv.FIREBASE_CONFIG.databaseURL,
        projectId: dotenv.FIREBASE_CONFIG.projectId,
        storageBucket: dotenv.FIREBASE_CONFIG.storageBucket,
        messagingSenderId: dotenv.FIREBASE_CONFIG.messagingSenderId
      };
    firebase.initializeApp(config);
   };
}
