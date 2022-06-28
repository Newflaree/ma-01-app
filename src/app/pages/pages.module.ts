import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Components
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
// Modules
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    HomeComponent,
    PagesComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CategoriesComponent,
    HomeComponent,
    PagesComponent,
    ProfileComponent,
    SettingsComponent
  ]
})
export class PagesModule { }
