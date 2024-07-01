import { Component, Input } from '@angular/core';
import { PatparvmCountry } from '../classPatparvm';

@Component({
  selector: 'app-patparvm-country',
  templateUrl: './patparvm-country.component.html',
  styleUrl: './patparvm-country.component.css'
})
export class PatparvmCountryComponent {

  @Input() patparvmData!: PatparvmCountry;
}
