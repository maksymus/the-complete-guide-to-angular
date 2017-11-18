import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmingAlertComponent } from './warming-alert.component';

describe('WarmingAlertComponent', () => {
  let component: WarmingAlertComponent;
  let fixture: ComponentFixture<WarmingAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmingAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmingAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
