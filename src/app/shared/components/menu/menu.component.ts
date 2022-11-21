import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Util } from 'src/app/util';

interface menuItem {
  text: string;
  scrollTo?: string;
  navigateTo?: string;
}

@Component({
  selector: 'top-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuIcon: IconProp = "bars";
  showMenuItems: boolean = false;

  menuItems: menuItem[] = [
    { text: "About", scrollTo: "about" },
    { text: "Projects", scrollTo: "projects" },
    { text: "Contact", scrollTo: "contact" },
  ]

  scrollInDesktop ( item: menuItem ) {
    Util.scrollIntoView( item.scrollTo! )
  }

  scrollInMobile( item: menuItem ) {     
    this.toggleMenu()
    Util.scrollIntoView( item.scrollTo! )
  }
  
  toggleMenu() { 
    this.showMenuItems = !this.showMenuItems;
    this.menuIcon = this.showMenuItems? "arrow-left" : "bars"  
  }

}
