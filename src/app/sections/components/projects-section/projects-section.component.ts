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
    { icon: ['fab', 'angular'], title: "Project", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quis laborum vel, impedit nemo, dolor iusto quibusdam error fugiat voluptate obcaecati maxime ratione eaque, molestias alias facere voluptatum quo culpa." },
    { icon: ['fab', 'python'], title: "Project", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quis laborum vel, impedit nemo, dolor iusto quibusdam error fugiat voluptate obcaecati maxime ratione eaque, molestias alias facere voluptatum quo culpa." },
    { icon: ['fab', 'python'], title: "Project", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quis laborum vel, impedit nemo, dolor iusto quibusdam error fugiat voluptate obcaecati maxime ratione eaque, molestias alias facere voluptatum quo culpa." },
  ]

  constructor() { }

  ngAfterViewInit(): void {
    this.objects = document.getElementsByClassName("project-info")
    this.observer = new IntersectionObserver( this.animaObjeto, { 
      root: null, rootMargin: "1000px 0px 150px 0px", threshold: 1.0 } )

    for ( let index of this.range( this.objects.length ) )
      this.observer.observe( this.objects.item(index)! )
  }

  animaObjeto( entries: IntersectionObserverEntry[], observer: IntersectionObserver ) {
    
    for ( let entry of entries ) {
      if ( entry.isIntersecting ) {
        entry.target.classList.add("visible")
      } 
      else entry.target.classList.remove("visible")
    }

  }

  range( value: number ) {
    return Array.from( Array(value).keys() )
  }

}
