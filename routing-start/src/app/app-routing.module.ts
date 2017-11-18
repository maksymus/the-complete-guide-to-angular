import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home/home.component";
import {UserComponent} from "app/users/user/user.component";
import {ServersComponent} from "app/servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {UsersComponent} from "app/users/users.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {PageErrorComponent} from "./page-error/page-error.component";
import {ServerResolver} from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]},
  { path: 'servers' /*, canActivate: [AuthGuard], */, canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
  ]},
  // { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'page-not-found', component: PageErrorComponent, data: {message: 'Page Not Found'} },
  { path: '**', redirectTo: '/page-not-found' },
]

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
