import {Component, OnInit, OnDestroy} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from "@ngrx/store";
import {FeatureState, State} from "../store/recipe.reducers";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  private recipeState: Observable<State>;

  // private subscription: Subscription;

  constructor(private recipeService: RecipeService, private store: Store<FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');

    // this.recipes = this.recipeService.getRecipes();
    //
    // this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
    //   this.recipes = recipes;
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

}
