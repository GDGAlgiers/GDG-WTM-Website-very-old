import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS6Component } from './landing-s6.component';

describe('LandingS6Component', () => {
  let component: LandingS6Component;
  let fixture: ComponentFixture<LandingS6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
