import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeResolver} from './recipes/recipe.service';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeResolver} },
    { path: ':id/edit', component: RecipeEditComponent, resolve: { recipe: RecipeResolver} },
  ]},
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
  exports: [RouterModule]
})
export class AppRoutingModule {

}
