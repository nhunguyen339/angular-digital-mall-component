import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealBrandProductComponent } from './deal-brand-product.component';

describe('DealBrandProductComponent', () => {
  let component: DealBrandProductComponent;
  let fixture: ComponentFixture<DealBrandProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealBrandProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealBrandProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
