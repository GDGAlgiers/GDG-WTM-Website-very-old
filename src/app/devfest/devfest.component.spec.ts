import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevfestComponent } from './devfest.component';

describe('DevfestComponent', () => {
  let component: DevfestComponent;
  let fixture: ComponentFixture<DevfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
