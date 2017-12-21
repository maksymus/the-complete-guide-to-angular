import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";

import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";
import {recipeReducer} from "./store/recipe.reducers";
import {RecipeEffects} from "./store/recipe.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
    StoreModule.forFeature('recipes', recipeReducer), // similar to app.module.ts - StoreModule.forRoot(reducers),
    EffectsModule.forFeature([RecipeEffects]), // similar to app.module.ts - EffectsModule.forRoot([AuthEffects]),
  ],
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule { }
