import { Component, Input } from '@angular/core';

@Component({
  selector: 'neon-light-button',
  templateUrl: './neon-light-button.component.html',
  styleUrls: ['./neon-light-button.component.scss']
})
export class NeonLightButtonComponent {
  @Input() label!: string;
  @Input() href: string = "#";
}
