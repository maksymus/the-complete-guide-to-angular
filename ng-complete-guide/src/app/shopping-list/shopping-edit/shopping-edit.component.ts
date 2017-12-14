import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {Store} from "@ngrx/store";

import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {AddIngredient, DeleteIngredient, StopEditIngredient, UpdateIngredient} from "../store/shopping-list.actions";
import {AppState} from "../store/shopping-list.reducers";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm')
  private ingredientForm: NgForm;

  private startedEditingSubscription: Subscription;
  private editMode = false;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.startedEditingSubscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex >= 0) {
          this.editMode = true;

          this.ingredientForm.setValue({
            name: data.editedIngredient.name,
            amount: data.editedIngredient.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
    // this.startedEditingSubscription = this.shoppingListService.startedEditing
    //   .subscribe((index: number) => {
    //     this.editMode = true;
    //     this.editedItemIndex = index;
    //
    //     const ingredient = this.shoppingListService.getIngredient(index);
    //
    //     this.ingredientForm.setValue({
    //       name: ingredient.name,
    //       amount: ingredient.amount
    //     });
    // });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new StopEditIngredient());
    this.startedEditingSubscription.unsubscribe();
  }

  onAdd() {
    const ingredient = new Ingredient(
      this.ingredientForm.controls.name.value,
      this.ingredientForm.controls.amount.value
    );

    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient({ingredient: ingredient}));
    } else {
      this.store.dispatch(new AddIngredient(ingredient));
    }

    this.clear();
  }

  onDelete() {
    if (this.editMode) {
      this.store.dispatch(new DeleteIngredient());
    }

    this.clear();
  }

  onClear() {
    this.clear();
  }

  private clear() {
    this.editMode = false;
    this.ingredientForm.reset();
  }
}
