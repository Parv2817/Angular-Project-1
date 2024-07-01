import { Component, Input } from '@angular/core';
import { PatparvmPersonal } from '../classPatparvm';
@Component({
  selector: 'app-patparvm-about',
  templateUrl: './patparvm-about.component.html',
  styleUrl: './patparvm-about.component.css'
})
export class PatparvmAboutComponent {

  @Input() patparvmMe!: PatparvmPersonal;
}
