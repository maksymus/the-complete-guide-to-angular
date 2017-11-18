import {Observable} from "rxjs/Observable";
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
export interface CanComponentDeactivate {
  canDeactivateMethod(): boolean | Observable<boolean> | Promise<boolean>;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivateMethod();
  }

}
