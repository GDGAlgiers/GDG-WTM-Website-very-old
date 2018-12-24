import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingS3Component } from './landing-s3.component';

describe('LandingS3Component', () => {
  let component: LandingS3Component;
  let fixture: ComponentFixture<LandingS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
