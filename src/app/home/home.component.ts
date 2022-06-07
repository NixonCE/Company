import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titInfo:string="Somos un grupo desarrolladores que hacemos tus proyectos realidad"
  textInfo:string="Esta compañia se encarga de el desarrollo de sofware en el ambito web, con nuestros conocimientos en en los lenguajes y los frameworks necesarios, somos capaces de llevara ti idea y proyecto a flote.";
  img1:string="https://dc722jrlp2zu8.cloudfront.net/media/cache/bf/9d/bf9d8696ded97600e375559031dd79f5.webp"
  img2:string="https://concepto.de/wp-content/uploads/2018/09/lenguaje-de-programaci%C3%B3n-e1537466880796-800x400.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
