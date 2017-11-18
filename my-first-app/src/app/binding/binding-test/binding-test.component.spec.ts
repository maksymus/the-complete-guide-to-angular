import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTestComponent } from './binding-test.component';

describe('BindingTestComponent', () => {
  let component: BindingTestComponent;
  let fixture: ComponentFixture<BindingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
