import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS7Component } from './landing-s7.component';

describe('LandingS7Component', () => {
  let component: LandingS7Component;
  let fixture: ComponentFixture<LandingS7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
