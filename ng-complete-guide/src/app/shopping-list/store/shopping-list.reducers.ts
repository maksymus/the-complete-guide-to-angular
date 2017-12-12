import {Ingredient} from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 6),
    new Ingredient('Tomatoes', 10)
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredients = [...state.ingredients];

      const ingredient = ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      ingredients[action.payload.index] = updatedIngredient;

      return {
        ...state,
        ingredients: ingredients
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: oldIngredients
      };

    default:
      return state;
  }
}
