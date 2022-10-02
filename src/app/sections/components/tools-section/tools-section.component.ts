import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tools-section',
  templateUrl: './tools-section.component.html',
  styleUrls: ['./tools-section.component.scss']
})
export class ToolsSectionComponent implements OnInit {

  toolsList: string[] = [
    "Angular",
    "Wordpress",
    "Visual Studio Code",
    "Git",
    "GitHub",
    "PrimeNg",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "Python",
    "PySide6",
    "Django",
    "SQL",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
