import { Component, Input } from '@angular/core';
import { FlippingTextCardContent } from '../../interfaces/flipping-text-card-content';

@Component({
  selector: 'flipping-text-card',
  templateUrl: './flipping-text-card.component.html',
  styleUrls: ['./flipping-text-card.component.scss']
})
export class FlippingTextCardComponent {
  @Input() cursor!: string;
  @Input() content!: FlippingTextCardContent;
}
