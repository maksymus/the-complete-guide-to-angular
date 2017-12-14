import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {StartEditIngredient} from "./store/shopping-list.actions";
import {AppState} from "../store/app.reducers";

import {State} from "../shopping-list/store/shopping-list.reducers";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<State>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEditIngredient(index));
  }
}
