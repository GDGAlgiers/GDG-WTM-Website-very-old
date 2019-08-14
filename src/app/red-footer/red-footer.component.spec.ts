import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedFooterComponent } from './red-footer.component';

describe('RedFooterComponent', () => {
  let component: RedFooterComponent;
  let fixture: ComponentFixture<RedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
