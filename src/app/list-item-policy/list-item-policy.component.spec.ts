import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPolicyComponent } from './list-item-policy.component';

describe('ListItemPolicyComponent', () => {
  let component: ListItemPolicyComponent;
  let fixture: ComponentFixture<ListItemPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
