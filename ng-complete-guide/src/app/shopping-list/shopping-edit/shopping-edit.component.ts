import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";

import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {AddIngredient, DeleteIngredient, UpdateIngredient} from "../store/shopping-list.actions";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm')
  private ingredientForm: NgForm;

  private startedEditingSubscription: Subscription;
  private editedItemIndex = -1;
  private editMode = false;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;

        const ingredient = this.shoppingListService.getIngredient(index);

        this.ingredientForm.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        });
    });
  }

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }

  onAdd() {
    const ingredient = new Ingredient(
      this.ingredientForm.controls.name.value,
      this.ingredientForm.controls.amount.value
    );

    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient({index: this.editedItemIndex, ingredient: ingredient}));
    } else {
      this.store.dispatch(new AddIngredient(ingredient));
    }

    this.clear();
  }

  onDelete() {
    if (this.editMode) {
      console.log(this.editedItemIndex);
      this.store.dispatch(new DeleteIngredient(this.editedItemIndex));
    }

    this.clear();
  }

  onClear() {
    this.clear();
  }

  private clear() {
    this.editedItemIndex = -1;
    this.editMode = false;
    this.ingredientForm.reset();
  }
}
