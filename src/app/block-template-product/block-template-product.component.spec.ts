import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTemplateProductComponent } from './block-template-product.component';

describe('BlockTemplateProductComponent', () => {
  let component: BlockTemplateProductComponent;
  let fixture: ComponentFixture<BlockTemplateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTemplateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTemplateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
