import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Inicio'
    }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    data: {
      title: 'Categorías'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Mi Perfil'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Ajustes'
    }
  }
];

@NgModule({
  imports: [ RouterModule.forChild( childRoutes ) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
