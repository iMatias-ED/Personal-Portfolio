import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

// components
import { FontawesomeAnimatedBackgroundComponent } from './components/fontawesome-animated-background/fontawesome-animated-background.component';
import { ToolsSectionComponent } from './components/tools-section/tools-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

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
    fontawesome.addIcons( faAngular, faWordpress, faPython );
    fontawesome.addIcons( 
      faAngleDown, faAngleUp, faBars, faWandMagicSparkles, faMagnifyingGlass,
      faCloud, faMugHot, faRocket, faHeadphones, faCode, faGlobe, faCity, faWifi,
      faComputer, faBug, faUserSecret, faKeyboard, faDatabase, faNetworkWired,
      faLaptop, faTerminal, faMicrochip, faRobot  
    );
  }
}
