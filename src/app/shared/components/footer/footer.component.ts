import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface socialNetwork {
  icon: IconProp;
  linkTo: string;
}

@Component({
  selector: 'custom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialNetworks: socialNetwork[] = [
    {icon: ['fab', 'github'], linkTo: "https://github.com/iMatias-ED"},
    {icon: ['fab', 'youtube'], linkTo: "https://www.youtube.com/channel/UC_e24Q2i6XtzQ_6CQWWwhtQ"},
    {icon: ['fab', 'linkedin'], linkTo: "https://www.linkedin.com/in/matias-acosta-a72a441bb/"},
    {icon: ['fab', 'instagram'], linkTo: "https://www.instagram.com/imatias_ed/"},
  ]

  redirect( url: string ) { location.href = url }

}
