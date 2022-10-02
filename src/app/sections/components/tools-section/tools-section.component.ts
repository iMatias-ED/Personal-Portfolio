import { Component, OnInit } from '@angular/core';
import { FlippingTextCardContent } from 'src/app/shared/interfaces/flipping-text-card-content';

@Component({
  selector: 'tools-section',
  templateUrl: './tools-section.component.html',
  styleUrls: ['./tools-section.component.scss']
})
export class ToolsSectionComponent implements OnInit {

  exampleTool: FlippingTextCardContent = 
    { frontText: "HTML", backText: "Professional" }
  

  toolsList: FlippingTextCardContent[] = [
    { frontText: "Angular",   backText: "Professional" },
    { frontText: "Wordpress", backText: "Professional" },
    { frontText: "TypeScript", backText: "Professional" },
    { frontText: "Python", backText: "Advanced" },
    { frontText: "Git", backText: "Professional" },
    { frontText: "CSS/SASS", backText: "Professional" },
    { frontText: "SQL", backText: "Medium" },
    { frontText: "Django", backText: "Medium" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
