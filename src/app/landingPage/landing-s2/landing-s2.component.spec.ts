import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS2Component } from './landing-s2.component';

describe('LandingS2Component', () => {
  let component: LandingS2Component;
  let fixture: ComponentFixture<LandingS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
