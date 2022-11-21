import { Component } from '@angular/core';
import { FlippingTextCardContent } from 'src/app/shared/interfaces/flipping-text-card-content';

@Component({
  selector: 'tools-section',
  templateUrl: './tools-section.component.html',
  styleUrls: ['./tools-section.component.scss']
})
export class ToolsSectionComponent {

  toolsList: FlippingTextCardContent[] = [
    { 
      frontFace: { text: "Angular"},   
      backFace: { title:"Experience Level", text:"Professional", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "Wordpress"},   
      backFace: { title:"Experience Level", text:"Professional", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "TypeScript"},   
      backFace: { title:"Experience Level", text:"Professional", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "Python"},   
      backFace: { title:"Experience Level", text:"Advanced", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "Git"},   
      backFace: { title:"Experience Level", text:"Professional", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "CSS/SASS"},   
      backFace: { title:"Experience Level", text:"Professional", textColor: "#12E085"} 
    },
    { 
      frontFace: { text: "SQL"},   
      backFace: { title:"Experience Level", text:"Medium", textColor: "#AD1F68"} 
    },
    { 
      frontFace: { text: "Django"},   
      backFace: { title:"Experience Level", text:"Medium", textColor: "#AD1F68"} 
    },
  ]

}
