import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

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

  constructor(private shoppingListService: ShoppingListService) { }

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
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.clear();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
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
