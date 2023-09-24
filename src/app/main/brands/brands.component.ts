import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { options2 } from '../constant';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  public slidesStore!: any[];
  public customOptions2: OwlOptions = options2;
  ngOnInit(): void {
    this.slidesStore = [
      {
        id : 1,
        src: "assets/img/logos/mtcconnect.svg",
        alt: "MTC connect logo",
        height: "100px",
        title: "MTC connect",
      },
      {
        id : 2,
        src: "assets/img/logos/vetor.jpg",
        alt: "Vetor Consultoria logo",
        title: "Vetor Consultoria logo",
      },
      {
        id : 3,
        src: "assets/img/logos/ADlogo.svg",
        alt: "Ambiental & Drone logo",
        title: "Ambiental & Drone",
      },
      {
        id : 4,
        src: "assets/img/logos/engconclogo.svg",
        alt: "Engenharia de Concursos logo",
        title: "Engenharia de Concursos",
      },
      /*{
        id : 5,
        src: "assets/img/brand-1.svg",
        alt: "brand-1",
        title: "brand-1",
      }*/
    ];
  }
}
