import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TitleComponent } from './title/title.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';



@NgModule({
  declarations: [
    TitleComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ThemeSwitcherComponent
  ]
})
export class ComponentsModule { }
