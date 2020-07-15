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
      this.buttonText = 'Less Info';
    } else {
      this.buttonText = 'More Info';
    }
    console.log('NOW the value of this.showtable is...' + this.showTable);
  }

//Formats multiple address variables into one address variable (formatted address) for display.
public formatAddress(){
  if (this.member.address_street !== null){
    this.formattedAddress = this.member.address_street;
    if (this.member.address_suburb !== null){
      this.formattedAddress = this.formattedAddress + '\n' + this.member.address_suburb;
    }
    if (this.member.address_city !== null){
      this.formattedAddress = this.formattedAddress + '\n' + this.member.address_city;
        if(this.member.address_postCode !==null){
        this.formattedAddress = this.formattedAddress + ' ' + this.member.address_postCode;
      }
    }
  }else{
    this.formattedAddress = 'There is no address';
  }
  console.log('formattedAddress = ' + this.formattedAddress);
  console.log(this.member.address_suburb);

};

  
  ngOnInit(): void {
    this.showTable = false;
    this.buttonText = 'More Info';
    this.formatAddress();
    // console.log(this.member);
  }
}
