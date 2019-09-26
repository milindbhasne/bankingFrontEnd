import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedAccountsComponent } from './locked-accounts.component';

describe('LockedAccountsComponent', () => {
  let component: LockedAccountsComponent;
  let fixture: ComponentFixture<LockedAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockedAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
