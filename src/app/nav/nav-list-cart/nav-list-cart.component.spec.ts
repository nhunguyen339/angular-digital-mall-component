import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListCartComponent } from './nav-list-cart.component';

describe('NavListCartComponent', () => {
  let component: NavListCartComponent;
  let fixture: ComponentFixture<NavListCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavListCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
