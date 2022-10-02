import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  observer!: IntersectionObserver;
  objects!: HTMLCollectionOf<Element>

  constructor() { }

  ngOnInit(): void {
    this.objects = document.getElementsByClassName("project-info")
    this.observer = new IntersectionObserver( this.animaObjeto, { 
      root: null, rootMargin: "200px 0px 120px 0px", threshold: 1.0 } )

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
