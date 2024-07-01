import { Component } from '@angular/core';
import { PatparvmPersonal } from './classPatparvm';
import { PatparvmCountry } from './classPatparvm';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A1patparvm';

  PERpatparvm: PatparvmPersonal = {
    patparvmName: 'Parv Mukeshkumar Patel',
    patparvmNumber: 991718111,
    patparvmLogin: 'patparvm',
    patparvmEmail: 'patparvm@sheridancollege.ca',
    patparvmCampus: 'Davis',
    patparvmImage: 'assets/images/person.jpeg'
  }

  CTRYpatparvm: PatparvmCountry = {
    patparvmCountryName: 'India',
    patparvmCountryId: 356,
    patparvmCountryCapital: 'Delhi',
    patparvmAvgSalary: 945489,
    patparvmImage: 'assets/images/country.jpeg'
  }
}
