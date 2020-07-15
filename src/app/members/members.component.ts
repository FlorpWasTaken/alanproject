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
      "address_street": '71 James Street',
      "address_suburb": null,
      "address_city": 'Whakatane',
      "address_state": null,
      "address_postCode": '3120',
      "height": "190cm",
      "age": "17",
      "sex": "Male",
      "portrait": "",
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
      "id": 3,
      "surname": "Gallacher",
      "firstname": "Luigi",
      "phone": "",
      "mobile": "",
      "email": "",
      "website": "luigiadventures.co.nz",
      "address_street": "71 James Street",
      "address_suburb": null,
      "address_city": 'Whakatane',
      "address_state": null,
      "address_postCode": "3120",
      "height": "50cm",
      "age": "1.5",
      "sex": "Male",
      "portrait": ""
    },
    {
      "id": 4,
      "surname": "Gallacher",
      "firstname": "Lisa",
      "phone": "",
      "mobile": "",
      "email": "",
      "website": null,
      "address_street": "71 James Street",
      "address_suburb": null,
      "address_city": 'Whakatane',
      "address_state": null,
      "address_postCode": "3120",
      "height": '180cm',
      "age": "46",
      "sex": "Female",
      "portrait": ""
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.members);

  }

}
