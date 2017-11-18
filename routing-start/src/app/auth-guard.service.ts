import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "app/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const res = this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated)
        return true;

      this.router.navigate(['/'])
    });

    return res;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }
}
