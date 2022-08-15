import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Deeplinks} from '@awesome-cordova-plugins/deeplinks/ngx';
import {HomePage} from './home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    protected platform: Platform,
    protected navController: NavController,
    protected deepLinks: Deeplinks
  ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.deepLinks.route({
        '/home': HomePage,
        '/home/:id': HomePage,
      }).subscribe(match => {
        console.log(match);
      }, nomatch => {
        console.log(nomatch);
      });
    });
  }
}
