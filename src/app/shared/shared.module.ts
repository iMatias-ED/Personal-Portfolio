import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlippingTextCardComponent } from './components/flipping-text-card/flipping-text-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { NeonLightButtonComponent } from './components/neon-light-button/neon-light-button.component';
import { ScrollTopComponent } from './components/scroll-button/scroll-button.component';
import { WaterTextComponent } from './components/water-text/water-text.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    FlippingTextCardComponent,
    FooterComponent,
    MenuComponent,
    NeonLightButtonComponent,
    ScrollTopComponent,
    WaterTextComponent,
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
    WaterTextComponent,
  ]
})
export class SharedModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIcons(faGithub, faYoutube, faLinkedin, faInstagram, faArrowLeft);
  }
}
