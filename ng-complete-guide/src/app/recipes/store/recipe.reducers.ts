import {RecipeActions} from "./recipe.actions";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

export interface FeatureState {
  recipes: State
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
}

export function recipeReducer(state = initialState, action: RecipeActions) {
  switch (action.type) {
    default:
      return state;
  }
}
