import { Component, OnInit } from '@angular/core';
// import * as members from './members.json';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  public members = [
    {
      "id": 1,
      "surname": "Gallacher",
      "firstname": "Aidan",
      "phone": "",
      "mobile": null,
      "email": "aidan@freedomsoftware.co.nz",
      "website": "freedomsoftware.co.nz",
      "address_street": null,
      "address_suburb": null,
      "address_city": null,
      "address_state": null,
      "address_postCode": null,
      "height": "210cm",
      "age": "17",
      "sex": "Male",
      "portrait": "../../../assets/images/male_default.png",
    },
    {
      "id": 2,
      "surname": "Eddy",
      "firstname": "Alan",
      "phone": "",
      "mobile": "021 554053",
      "email": "alan@freedomsoftware.co.nz",
      "website": "freedomsoftware.co.nz",
      "address_street": "31 Heathfield Avenue",
      "address_suburb": "Huntington",
      "address_city": "Hamilton",
      "address_state": null,
      "address_postCode": "3210",
      "height": "199cm",
      "age": "50",
      "sex": "Male",
      "portrait": "../../../assets/images/alan.png"
    },
    {
      "id": 668,
      "surname": "Gallacher",
      "firstname": "Luigi",
      "phone": "",
      "mobile": "",
      "email": "",
      "website": "luigiadventures.co.nz",
      "address_street": "71 James Street",
      "address_suburb": "",
      "address_city": "Whakatane",
      "address_state": null,
      "address_postCode": "3120",
      "height": ".5",
      "age": "1.5",
      "sex": "Male",
      "portrait": "../../../assets/images/male_default.png"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.members);

  }

}
