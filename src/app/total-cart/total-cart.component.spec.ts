import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCartComponent } from './total-cart.component';

describe('TotalCartComponent', () => {
  let component: TotalCartComponent;
  let fixture: ComponentFixture<TotalCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
