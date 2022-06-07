import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  img:string="https://live.hsmob.io/storage/images/tecnonautas.net/tecnonautas.net_shutterstock_325494917-5a68d8403418c600190a3e1f.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
