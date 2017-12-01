import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  // // { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: 'page-not-found', component: PageErrorComponent, data: {message: 'Page Not Found'} },
  // { path: '**', redirectTo: '/page-not-found' },
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
