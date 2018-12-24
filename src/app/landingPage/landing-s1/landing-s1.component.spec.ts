import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS1Component } from './landing-s1.component';

describe('LandingS1Component', () => {
  let component: LandingS1Component;
  let fixture: ComponentFixture<LandingS1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
