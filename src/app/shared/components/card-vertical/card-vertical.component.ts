import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vertical',
  templateUrl: './card-vertical.component.html',
  styleUrls: ['./card-vertical.component.css']
})
export class CardVerticalComponent implements OnInit {

  @Input() cover:String = ''
  @Input() name:String = ''

  constructor() { }

  ngOnInit(): void {
  }

}
