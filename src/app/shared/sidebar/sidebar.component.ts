import { Component, OnInit } from '@angular/core';
// Services
import {SidebarService} from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public date = new Date().getFullYear();
  public toggler: boolean = false;

  constructor(
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  showNav() {
    const nav = document.querySelector( 'aside' );
    const navTog = document.querySelector( '.nav-toggler' )

    navTog?.classList.toggle( 'open' );
    nav?.classList.toggle( 'open' );
  }

}
