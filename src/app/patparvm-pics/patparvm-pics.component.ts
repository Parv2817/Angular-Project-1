import { Component, Input } from '@angular/core';
import { PatparvmCountry, PatparvmPersonal } from '../classPatparvm';

@Component({
  selector: 'app-patparvm-pics',
  templateUrl: './patparvm-pics.component.html',
  styleUrl: './patparvm-pics.component.css'
})
export class PatparvmPicsComponent {

  @Input() patparvmImage1!: PatparvmPersonal;
  @Input() patparvmImage2!: PatparvmCountry;

}
