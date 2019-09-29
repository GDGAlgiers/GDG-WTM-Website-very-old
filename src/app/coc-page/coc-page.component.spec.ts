import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COCPageComponent } from './coc-page.component';

describe('COCPageComponent', () => {
  let component: COCPageComponent;
  let fixture: ComponentFixture<COCPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COCPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
