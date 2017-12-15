import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";

import {AppState} from "../../store/app.reducers";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("AuthInterceptor: setting request auth token");
    const authState = this.store.select('auth');

    return authState.take(1)
      .switchMap(state => {
        const clonedRequest = req.clone({params: req.params.set('auth', state.token)});
        return next.handle(clonedRequest);
      });

  }
}
