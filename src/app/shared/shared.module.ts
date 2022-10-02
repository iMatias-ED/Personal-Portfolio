import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { FlippingTextCardComponent } from './components/flipping-text-card/flipping-text-card.component';

@NgModule({
  declarations: [
    FooterComponent,
    FlippingTextCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fab )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
