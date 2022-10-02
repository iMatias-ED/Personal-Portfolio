import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { FlippingTextCardComponent } from './components/flipping-text-card/flipping-text-card.component';
import { NeonLightButtonComponent } from './components/neon-light-button/neon-light-button.component';

@NgModule({
  declarations: [
    FlippingTextCardComponent,
    FooterComponent,
    NeonLightButtonComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FlippingTextCardComponent,
    FooterComponent,
    NeonLightButtonComponent,
  ]
})
export class SharedModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fab )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
