import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { FlippingTextCardComponent } from './components/flipping-text-card/flipping-text-card.component';
import { NeonLightButtonComponent } from './components/neon-light-button/neon-light-button.component';
import { MenuComponent } from './components/menu/menu.component';
import { ScrollTopComponent } from './components/scroll-button/scroll-button.component';

@NgModule({
  declarations: [
    FlippingTextCardComponent,
    FooterComponent,
    MenuComponent,
    NeonLightButtonComponent,
    ScrollTopComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FlippingTextCardComponent,
    FooterComponent,
    MenuComponent,
    NeonLightButtonComponent,
    ScrollTopComponent,
  ]
})
export class SharedModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fab )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
