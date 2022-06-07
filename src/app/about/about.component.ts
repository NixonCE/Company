import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  img1:string="https://www.tutofox.com/wp-content/uploads/2021/05/angular-servidor-subir.png";
  img2:string="https://concepto.de/wp-content/uploads/2018/09/lenguaje-de-programaci%C3%B3n-e1537466880796-800x400.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
