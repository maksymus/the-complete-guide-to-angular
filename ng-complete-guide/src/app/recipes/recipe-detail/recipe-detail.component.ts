import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";
import {AddIngredients} from "../../shopping-list/store/shopping-list.actions";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });

  }

  onAddShoppingList() {
    this.store.dispatch(new AddIngredients(this.recipe.ingredients));
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}


