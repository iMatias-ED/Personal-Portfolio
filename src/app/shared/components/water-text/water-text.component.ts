import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'water-text',
  templateUrl: './water-text.component.html',
  styleUrls: ['./water-text.component.scss']
})
export class WaterTextComponent implements OnInit {
  @Input() label!: string;
  @Input() color: string = "#12E085";
  @Input() fontSize: string = "4.5em";
  @Input() borderColor: string = "#12E085";

  constructor() { }

  ngOnInit(): void {
  }

}
