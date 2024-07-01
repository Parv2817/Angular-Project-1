import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatparvmAboutComponent } from './patparvm-about.component';

describe('PatparvmAboutComponent', () => {
  let component: PatparvmAboutComponent;
  let fixture: ComponentFixture<PatparvmAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatparvmAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatparvmAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
