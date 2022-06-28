import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: any[] = [];

  constructor() { 
    this.loadMenu();
  }

  loadMenu() {
    this.menu = [
      {
        title: 'Inicio',
        url: '/home',
        icon: 'fa fa-home'
      },
      {
        title: 'Practicar',
        url: 'categories',
        icon: 'fas fa-pencil-alt'
      },
      {
        title: 'Mi Perfil',
        url: 'profile',
        icon: 'fas fa-user'
      },
      {
        title: 'Ajustes',
        url: 'settings',
        icon: 'fas fa-cog'
      },
      {
        title: 'Cerrar Sesión',
        url: '/login',
        icon: 'fas fa-sign-out-alt'
      }
    ];
  }
}
