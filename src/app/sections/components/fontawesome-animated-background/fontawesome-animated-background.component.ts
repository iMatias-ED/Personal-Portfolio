import { Component, AfterViewInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'fontawesome-animated-background',
  templateUrl: './fontawesome-animated-background.component.html',
  styleUrls: ['./fontawesome-animated-background.component.scss']
})
export class FontawesomeAnimatedBackgroundComponent implements AfterViewInit {
  animate!: boolean;  
  @Input() iconRowsCount: number = 20;

  iconsList: IconProp[] = [
    "wand-magic-sparkles" ,
    "magnifying-glass",
    "cloud",
    "mug-hot",
    "rocket",
    "headphones",
    "code",
    "globe",
    "city",
    "wifi",
    "computer",
    "bug",
    "user-secret",
    "keyboard",
    "database",
    "network-wired",
    "laptop",
    "terminal",
    "microchip",
    "robot"
  ]

  get rowCount() {
    return Array.from( Array(this.iconRowsCount).keys() )
  }

  constructor() { }

  ngAfterViewInit() { 
    setTimeout( () => this.animate = true, 200 )
  }

}
