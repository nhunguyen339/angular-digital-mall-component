import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustumerComponent } from './registered-custumer.component';

describe('RegisteredCustumerComponent', () => {
  let component: RegisteredCustumerComponent;
  let fixture: ComponentFixture<RegisteredCustumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredCustumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
