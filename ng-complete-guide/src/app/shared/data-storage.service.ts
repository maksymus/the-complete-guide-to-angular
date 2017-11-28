import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  private RECIPES_STORAGE = 'https://ng-complete-guide-74b69.firebaseio.com/recipes.json';

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(this.RECIPES_STORAGE, this.recipeService.getRecipes());
  }

  fetchRecipes() {
    return this.http.get(this.RECIPES_STORAGE)
      .map((response: Response) => {
        const recipes = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }

        return recipes;
      })
      .subscribe(
        (response: Response) => this.recipeService.setRecipes(response.json()),
        (error: Response) => console.log(error)
        );
  }
}
