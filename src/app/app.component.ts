import { Component } from '@angular/core';
import {SettingsService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private settingService: SettingsService
  ) {

  }
  title = 'ma01Frontend';
}
