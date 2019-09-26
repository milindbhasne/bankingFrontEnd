import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchequesComponent } from './viewcheques.component';

describe('ViewchequesComponent', () => {
  let component: ViewchequesComponent;
  let fixture: ComponentFixture<ViewchequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
