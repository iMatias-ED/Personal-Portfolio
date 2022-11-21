import { Component, Input, AfterViewInit } from '@angular/core';
import { Util } from 'src/app/util';

@Component({
  selector: 'scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollTopComponent implements AfterViewInit {
  @Input() scrollToId!: string;
  @Input() showFromPx: number = 0;
  @Input() scrollIcon: "angle-up" | "angle-down" = "angle-up"

  hideButton: boolean = true;

  ngAfterViewInit() {
    this.hideButton = window.scrollY >= this.showFromPx? false : true;

    document.addEventListener('scroll', () => {
      this.hideButton = window.scrollY >= this.showFromPx? false : true;
    })
  }
  
  scroll() { Util.scrollIntoView(this.scrollToId) }


}
