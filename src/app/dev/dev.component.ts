import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  textInfo:string="Soy un programador con muchas ganas de aprender, considero que mi curiosidad por el mundo de la programacion, me hace una pieza fundamental para poder llevar a cabo cualquier desafio y culplir la necesidad de contratante.";

  imgPro:string="https://scontent.fsjo9-1.fna.fbcdn.net/v/t39.30808-6/217640908_873840549878295_6966444200708124812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aiIk21gJwzwAX_982hy&_nc_ht=scontent.fsjo9-1.fna&oh=00_AT9Zj3jRGWyzqIaoqZUV1sHCBgYLCIpjUodJ3sdjHwhQFw&oe=62A1FAC9";
  img1:string="https://www.armadilloamarillo.com/wp-content/uploads/fondo-de-programacion-web_ok.jpg";
  img2:string="https://www.datocms-assets.com/14946/1590690690-front-end.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  ini:boolean=true;
  ini2:boolean=false;
  onChange():void{
    if(this.ini===true){
      this.ini=false;
      this.ini2=true;
    }
    else if(this.ini===false){
      this.ini=true;
      this.ini2=false;

    }

  }
  com:Array<string> = [];

  addItem(newItem: string) {
    this.com.push(newItem);
  }

}
