import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'fontawesome-animated-background',
  templateUrl: './fontawesome-animated-background.component.html',
  styleUrls: ['./fontawesome-animated-background.component.scss']
})
export class FontawesomeAnimatedBackgroundComponent implements AfterViewInit {
  animate!: boolean;  
  @Input() iconRowsCount: number = 20;
  
  private iconsRef!: HTMLCollectionOf<Element>;
  private simulateHover: boolean = true;
  @ViewChild('iconsContainer') iconsDiv!: ElementRef

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

  randomNumbersArray( max: number ) {
    const n = Math.floor(Math.random() * 10);
    return Array.from({length: n}, () => Math.floor( Math.random() * max ));
  }

  constructor() { }

  ngAfterViewInit() { 
    // Main Title animation
    setTimeout( () => this.animate = true, 200 )

    // Simulate icons hover
    this.iconsRef = document.getElementsByTagName('fa-icon')

    setTimeout( () => {
      setInterval (() => {
        if (!this.simulateHover) return

        for ( let index of this.randomNumbersArray( this.iconsRef.length ) ) {
          this.iconsRef[index].classList.add("hover")
          setTimeout(() => {this.iconsRef[index].classList.remove("hover")}, 1000)
        }
      }, 700)
    }, 300)

    // Deactivate hover simulation when mouse is in the div
    console.dir(this.iconsDiv.nativeElement)
    this.iconsDiv.nativeElement.onmouseenter = () => {
      this.simulateHover = false;
    }
    this.iconsDiv.nativeElement.onmouseleave = () => {
      this.simulateHover = true;
    }
    
  }

}
