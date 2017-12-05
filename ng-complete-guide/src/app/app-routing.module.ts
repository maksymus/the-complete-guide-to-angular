import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuard} from './auth/auth.guard';
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
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
