import { Component, Input } from '@angular/core';
import { PatparvmPersonal } from '../classPatparvm';

@Component({
  selector: 'app-header-patparvm',
  templateUrl: './header-patparvm.component.html',
  styleUrl: './header-patparvm.component.css'
})
export class HeaderPatparvmComponent {

  @Input() patparvmChild!: PatparvmPersonal;
  currentDate: Date = new Date();
}
