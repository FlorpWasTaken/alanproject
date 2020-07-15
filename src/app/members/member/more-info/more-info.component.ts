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
public formattedAddress: string;

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


public formatAddress(){
  if (this.member.address_street !== null){
  this.formattedAddress = this.member.address_street;
  }else{
    this.formattedAddress = 'There is no address';
  }
  console.log('formattedAddress = ' + this.formattedAddress);
  console.log(this.member.address_suburb);

};

  
  ngOnInit(): void {
    this.showTable = true;
    this.buttonText = 'More Info';
    this.formatAddress();
    // console.log(this.member);
  }
}
