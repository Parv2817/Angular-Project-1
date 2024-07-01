import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatparvmPicsComponent } from './patparvm-pics.component';

describe('PatparvmPicsComponent', () => {
  let component: PatparvmPicsComponent;
  let fixture: ComponentFixture<PatparvmPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatparvmPicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatparvmPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
