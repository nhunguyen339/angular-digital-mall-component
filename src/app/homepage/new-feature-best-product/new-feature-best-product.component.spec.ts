import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureBestProductComponent } from './new-feature-best-product.component';

describe('NewFeatureBestProductComponent', () => {
  let component: NewFeatureBestProductComponent;
  let fixture: ComponentFixture<NewFeatureBestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFeatureBestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeatureBestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
