import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() img!:string;
  @Input() data!:string;
    // {data:"",img:""},
    // {data:"",img:""}
 
  constructor() { }

  ngOnInit(): void {
  }

 

}
