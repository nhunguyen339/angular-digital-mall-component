import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortWayComponent } from './sort-way.component';

describe('SortWayComponent', () => {
  let component: SortWayComponent;
  let fixture: ComponentFixture<SortWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
