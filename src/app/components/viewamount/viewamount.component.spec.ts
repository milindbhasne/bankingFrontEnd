import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewamountComponent } from './viewamount.component';

describe('ViewamountComponent', () => {
  let component: ViewamountComponent;
  let fixture: ComponentFixture<ViewamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
