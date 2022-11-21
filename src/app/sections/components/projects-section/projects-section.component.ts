import { AfterViewInit, Component } from '@angular/core';
import { FlippingTextCardContent } from 'src/app/shared/interfaces/flipping-text-card-content';


interface ProjectInfo {
  title: string;
  redirectTo: string;
  description: string;  
  cardContent: FlippingTextCardContent
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
    { 
      title: "Loan Calculator", 
      redirectTo: "https://calculadora.sancristobal.coop.py",
      description: "Built in Angular, the loan calculator is part of a local cooperative's user-facing suite.",
      cardContent: {
        frontFace: {icon: ['fab', 'angular'], iconSize:'3em', iconColor: "#12E085"},
        backFace: {title: "See Project", titleSize: "1.5em", titleColor: "#AD1F68"}
      } 
    },
    { 
      title: "Gym Control Software",
      redirectTo: "https://github.com/iMatias-ED/Sistema-Gym", 
      description: "  Built in Python, using PySide6 and SQLite3, this is a custom software created to administrate a small local gym business.",
      cardContent: {
        frontFace: {icon: ['fab', 'python'], iconSize:'3em', iconColor: "#12E085"},
        backFace: {title: "See Project", titleSize: "1.5em", titleColor: "#AD1F68"}
      } 
    },
    { 
      title: "\"El país que soñamos\"",
      redirectTo: "https://www.xn--elpasquesoamos-3lb4e.com/", 
      description: "Built in wordpress for an ONG organization, this is a simple website where an annual magazine, created by the community, is published.",
      cardContent: {
        frontFace: { icon: ['fab', 'wordpress'], iconSize:'3em', iconColor: "#12E085"},
        backFace: { title: "See Project", titleSize: "1.5em", titleColor: "#AD1F68"} 
    }
  }]

  ngAfterViewInit() {
    // Animate on scroll
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

  redirect( url: string ) { 
    window.open(url, '_blank') 
  }

  range( value: number ) {
    return Array.from( Array(value).keys() )
  }

}
