import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
public title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Alans best title in the world';
  }

}
