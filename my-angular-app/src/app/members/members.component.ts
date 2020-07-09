import { Component, OnInit } from '@angular/core';
import * as members from './members.json';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
public members = members.default;
  constructor() { }

  ngOnInit(): void {
    console.log(this.members);
  }

}
