import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontawesomeAnimatedBackgroundComponent } from './components/fontawesome-animated-background/fontawesome-animated-background.component';
// import { FontawesomeModule } from '../fontawesome/fontawesome.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    FontawesomeAnimatedBackgroundComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FontawesomeAnimatedBackgroundComponent
  ]
})
export class SharedModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fas )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
