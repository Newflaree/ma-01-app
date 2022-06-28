import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector( '#theme' );

  constructor() {
    const currentTheme = localStorage.getItem( 'theme' ) || './assets/css/default.css';

    this.linkTheme?.setAttribute( 'href', currentTheme );
  }

  changeTheme( theme: string ) {
    const url = `./assets/css/${ theme }.css`;

    this.linkTheme?.setAttribute( 'href', url );
    localStorage.setItem( 'theme', url );

  }

  checkCurrentTheme() {
    const links = document.querySelectorAll( '.selector' );
    links.forEach( (elem: any) => {
      elem.classList.remove( 'working' );
      const btnTheme = elem.getAttribute( 'data-theme' );
      const btnThemeUrl = `./assets/css/${ btnTheme }.css`;
      const currentTheme = this.linkTheme?.getAttribute( 'href' );

      if ( btnThemeUrl === currentTheme ) {
        elem.classList.add( 'working' );
      }
    });
  }
}
