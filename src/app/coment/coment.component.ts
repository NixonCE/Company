import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})

export class ComentComponent implements OnInit {
  @Output() newItem = new EventEmitter <string> ();

  addNewItem(value: string) {
    this.newItem.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
