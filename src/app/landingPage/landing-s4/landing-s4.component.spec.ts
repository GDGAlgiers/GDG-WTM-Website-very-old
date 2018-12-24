import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS4Component } from './landing-s4.component';

describe('LandingS4Component', () => {
  let component: LandingS4Component;
  let fixture: ComponentFixture<LandingS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
