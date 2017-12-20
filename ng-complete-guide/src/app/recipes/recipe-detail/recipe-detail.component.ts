import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {AddIngredients} from "../../shopping-list/store/shopping-list.actions";
import {AppState} from "../../store/app.reducers";
import {FeatureState, State} from "../store/recipe.reducers";
import {Observable} from "rxjs/Observable";
import {DeleteRecipe} from "../store/recipe.actions";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // recipeState: Observable<State>;
  id: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<FeatureState>) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onAddShoppingList() {
    this.store.select('recipes').take(1).subscribe(state => {
      this.store.dispatch(new AddIngredients(state.recipes[this.id].ingredients));
    });
  }

  onDeleteRecipe() {
    this.store.dispatch(new DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }
}


