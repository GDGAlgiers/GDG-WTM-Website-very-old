import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS5Component } from './landing-s5.component';

describe('LandingS5Component', () => {
  let component: LandingS5Component;
  let fixture: ComponentFixture<LandingS5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
