import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatparvmCountryComponent } from './patparvm-country.component';

describe('PatparvmCountryComponent', () => {
  let component: PatparvmCountryComponent;
  let fixture: ComponentFixture<PatparvmCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatparvmCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatparvmCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
