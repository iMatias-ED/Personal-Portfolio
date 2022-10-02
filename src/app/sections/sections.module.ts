import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { SharedModule } from '../shared/shared.module';

// components
import { FontawesomeAnimatedBackgroundComponent } from './components/fontawesome-animated-background/fontawesome-animated-background.component';
import { ToolsSectionComponent } from './components/tools-section/tools-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    FontawesomeAnimatedBackgroundComponent,
    ContactSectionComponent,
    ProjectsSectionComponent,
    ToolsSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    FontawesomeAnimatedBackgroundComponent,
    ContactSectionComponent,
    ProjectsSectionComponent,
    ToolsSectionComponent,
  ]
})
export class SectionsModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIconPacks( fas, fab )
    // fontawesome.addIcons(faFilm,faFish);
  }
}
