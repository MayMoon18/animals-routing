import { Component, Input, OnInit } from '@angular/core';
import { IAnimals } from '../models/animals';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  animalsCats: Array<IAnimals>;
  constructor() {
    this.animalsCats = [
      {
        imageUrl: 'https://cf.ltkcdn.net/gatos/images/std/236641-699x450-etapas-desarrollo-gatitos.jpg',
        description: 'Beautiful little cat'
      },
      {
        imageUrl: 'https://www.hogarmania.com/archivos/201204/estrenimiento-gato-bebe2-xl-668x400x80xX.jpg',
        description: 'Beautiful sleepy kitty'
      },
      {
        imageUrl: 'https://assets.afcdn.com/story/20180412/1154808_w980h638c1cx304cy228.jpg',
        description: 'Whater cat haha'
      },
      {
        imageUrl: 'https://aws.glamour.mx/prod/designs/v1/assets/620x413/195141.jpg',
        description: 'Cat pawsss'
      },
      {
        imageUrl: 'https://cdn.heraldodemexico.com.mx/wp-content/uploads/2020/04/23102453/gatitos-enfermos-covid-19-1200x675.jpg',
        description: 'Yummy haha'
      },
      {
        imageUrl: 'https://katoclinicafelina.com/wp-content/uploads/2018/10/Captura-de-pantalla-2018-10-11-a-las-10.43.09-e1539247454908.png',
        description: 'Little baby kitty'
      }
    ]
  }

  ngOnInit(): void {
  }

}
