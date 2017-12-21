import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {FETCH_RECIPES, FetchRecipes, SET_RECIPES, STORE_RECIPES} from "./recipe.actions";
import {DataStorageService} from "../../shared/data-storage.service";
import {Store} from "@ngrx/store";
import {FeatureState} from "./recipe.reducers";

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(FETCH_RECIPES)
    .switchMap((action: FetchRecipes) => {
      return this.dataStorageService.fetchRecipes();
    })
    .map(recipes => {
      return {
        type: SET_RECIPES,
        payload: recipes
      };
    });

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      return this.dataStorageService.storeRecipes(state.recipes);
    });

  constructor(private actions$: Actions, private dataStorageService: DataStorageService, private store: Store<FeatureState>) {}
}
