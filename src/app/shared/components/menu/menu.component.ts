import { Component, OnInit } from '@angular/core';
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
export class MenuComponent implements OnInit {
  showMenuItems: boolean = false;

  menuItems: menuItem[] = [
    { text: "About", scrollTo: "about" },
    { text: "Projects", scrollTo: "projects" },
    { text: "Contact", scrollTo: "contact" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo( item: menuItem ) { 
    console.log("scrollingTo", item.scrollTo)
    
    Util.scrollIntoView( item.scrollTo! )
    this.showMenuItems = false;
  }
  
  showMenu() { this.showMenuItems = true; }

}
