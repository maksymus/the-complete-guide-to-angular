import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeResolver} from "./recipe.service";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeResolver} },
    { path: ':id/edit', component: RecipeEditComponent, resolve: { recipe: RecipeResolver}, canActivate: [AuthGuard] },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
