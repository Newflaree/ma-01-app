import { Component, OnInit } from '@angular/core';
// Services
import { SettingsService } from 'src/app/services';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
  public linkTheme = document.querySelector( '#theme' );

  constructor(
    private settingServeice: SettingsService
  ) { }

  ngOnInit(): void {
    this.settingServeice.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
    this.settingServeice.changeTheme( theme );
  }
}
