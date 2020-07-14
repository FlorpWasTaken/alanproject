import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {
  @Input() member: any;
  constructor() { }
public showTable: boolean;
public buttonText: string;

  public tableToggle(){
    // This function will change the value of showtable to be the opposite of what it was
    // and change the value of the buttontext according to the value of the showtable
    console.log('The value of this.showtable is...' + this.showTable);
    this.showTable = !this.showTable;
    if (this.showTable) {
      this.buttonText = 'less Info';
    } else {
      this.buttonText = 'more Info';
    }
    console.log('NOW the value of this.showtable is...' + this.showTable);

  }
  ngOnInit(): void {
    this.showTable = false;
    this.buttonText = 'More Info';
    console.log('Hello Aidan');
  }
}
