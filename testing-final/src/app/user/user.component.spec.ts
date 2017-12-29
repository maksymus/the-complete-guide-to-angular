import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserComponent } from './user.component';
import {UserService} from "./user.service";
import {DataService} from "../shared/data.service";

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use UserService', () => {
    var userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name);
  });

  it('should display user name if logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();

    var compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(component.user.name);
  });

  it('should not display user name if not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();

    var compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name);
  });

  it('sync', () => {
    var dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();

    expect(component.data).toBe(undefined);
  });

  it('async', async(() => {
    var dataService = fixture.debugElement.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  // not working
  // it('fake async', fakeAsync(() => {
  //   var dataService = fixture.debugElement.injector.get(DataService);
  //   spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
  //   fixture.detectChanges();
  //   tick();
  //
  //   expect(component.data).toBe('Data');
  // }));
});
