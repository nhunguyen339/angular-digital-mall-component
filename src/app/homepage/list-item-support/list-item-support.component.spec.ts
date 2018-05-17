import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSupportComponent } from './list-item-support.component';

describe('ListItemSupportComponent', () => {
  let component: ListItemSupportComponent;
  let fixture: ComponentFixture<ListItemSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
