import { AfterViewInit, Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ProjectInfo {
  icon: IconProp;
  title: string;
  description: string;
}

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements AfterViewInit {
  observer!: IntersectionObserver;
  objects!: HTMLCollectionOf<Element>

  projectsInfo: ProjectInfo[] = [
    { icon: ['fab', 'angular'], title: "Loan Calculator", 
      description: "  Built in Angular, the loan calculator is part of a local cooperative's user-facing suite." },
    { icon: ['fab', 'python'], title: "Gym Control Software", 
      description: "  Built in Python, using PySide6 and SQLite3, this is a custom software created to administrate a small local gym business." },
    { icon: ['fab', 'wordpress'], title: "\"El país que soñamos\"", 
      description: "Built in wordpress for an ORG organization, this is a simple website where an annual magazine, created by the community, is published." },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.objects = document.getElementsByClassName("project-info")
    this.observer = new IntersectionObserver( this.animaObjeto, { 
      root: null, rootMargin: "1000px 0px 200px 0px", threshold: 1.0 } )

    for ( let index of this.range( this.objects.length ) )
      this.observer.observe( this.objects.item(index)! )
  }

  animaObjeto( entries: IntersectionObserverEntry[], observer: IntersectionObserver ) {
    for ( let entry of entries ) {
      if ( entry.isIntersecting ) entry.target.classList.add("visible")
      else entry.target.classList.remove("visible")
    }
  }

  range( value: number ) {
    return Array.from( Array(value).keys() )
  }

}
