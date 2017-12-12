import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ingredients: Ingredient[]}>;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList')
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
