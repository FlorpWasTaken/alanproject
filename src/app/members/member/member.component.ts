import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
@Input() member: any;
//Variable to hold the link for the person or the defaults
public cardImageLink: string;
  constructor() { }

//Sets the card image link variable to the member portrait link
//or if the portrait link is blank sets the card image link
//to the default male or female image based on sex of the member
public setPortraitImage (){
  if(this.member.portrait.length > 0){
    this.cardImageLink = this.member.portrait;
  } else{
    if(this.member.sex =='Male'){
      this.cardImageLink = '../../../assets/images/male_default.png';
    } else{
      this.cardImageLink = '../../../assets/images/female_default.png';
    }

  }
}

  ngOnInit(): void {
    this.setPortraitImage();
  }

}
