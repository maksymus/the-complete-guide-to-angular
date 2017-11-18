import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesAllertComponent } from './succes-allert.component';

describe('SuccesAllertComponent', () => {
  let component: SuccesAllertComponent;
  let fixture: ComponentFixture<SuccesAllertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesAllertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesAllertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
