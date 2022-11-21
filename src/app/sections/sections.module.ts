import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// components
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FontawesomeAnimatedBackgroundComponent } from './components/fontawesome-animated-background/fontawesome-animated-background.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ToolsSectionComponent } from './components/tools-section/tools-section.component';

// Icons 
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faWordpress, faPython } from '@fortawesome/free-brands-svg-icons';
import { 
  faAngleDown, faAngleUp, faBars, faWandMagicSparkles, faMagnifyingGlass,
  faCloud, faMugHot, faRocket, faHeadphones, faCode, faGlobe, faCity, faWifi,
  faComputer, faBug, faUserSecret, faKeyboard, faDatabase, faNetworkWired,
  faLaptop, faTerminal, faMicrochip, faRobot
} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    ContactSectionComponent,
    FontawesomeAnimatedBackgroundComponent,
    ToolsSectionComponent,
    ProjectsSectionComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    ContactSectionComponent,
    FontawesomeAnimatedBackgroundComponent,
    ToolsSectionComponent,
    ProjectsSectionComponent,
  ]
})

export class SectionsModule {
  constructor( fontawesome: FaIconLibrary ) {
    fontawesome.addIcons( faAngular, faWordpress, faPython );
    fontawesome.addIcons( 
      faAngleDown, faAngleUp, faBars, faWandMagicSparkles, faMagnifyingGlass,
      faCloud, faMugHot, faRocket, faHeadphones, faCode, faGlobe, faCity, faWifi,
      faComputer, faBug, faUserSecret, faKeyboard, faDatabase, faNetworkWired,
      faLaptop, faTerminal, faMicrochip, faRobot  
    );
  }
}
