import { Component, Input } from '@angular/core';
import { Util } from 'src/app/util';

@Component({
  selector: 'scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollTopComponent {
  @Input() scrollIcon: "angle-up" | "angle-down" = "angle-up"
  @Input() scrollToId!: string;

  scroll() { Util.scrollIntoView(this.scrollToId) }

}
