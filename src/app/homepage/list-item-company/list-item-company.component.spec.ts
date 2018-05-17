import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCompanyComponent } from './list-item-company.component';

describe('ListItemCompanyComponent', () => {
  let component: ListItemCompanyComponent;
  let fixture: ComponentFixture<ListItemCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
