import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent
  ]
})
export class ComponentsModule { }
