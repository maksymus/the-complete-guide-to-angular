import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome!!!',
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Big Fat Burger',
      'What else do you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipe(+route.params['id']);
  }
}
