import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class FontawesomeModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fas )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
