import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {FeatureState} from "../store/recipe.reducers";
import {Store} from "@ngrx/store";
import {AddRecipe, UpdateRecipe} from "../store/recipe.actions";


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;

  id: number;
  recipe: Recipe;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private store: Store<FeatureState>) {}

  ngOnInit() {
    this.editMode = false;

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
      this.editMode = this.recipe != null;
      this.initRecipeForm();
    });

    this.initRecipeForm();
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new UpdateRecipe({index: this.id, recipe: this.recipeForm.value as Recipe}));
    } else {
      this.store.dispatch(new AddRecipe(this.recipeForm.value as Recipe));
    }

    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

  onAddIngredient() {
    const ingredientControl = this.createIngredientControl();

    const ingredientControls = this.recipeForm.get('ingredients') as FormArray;
    ingredientControls.push(ingredientControl);
  }

  onDeleteIngredient(index: number) {
    const ingredientControls = this.recipeForm.get('ingredients') as FormArray;
    ingredientControls.removeAt(index);
  }

  private initRecipeForm() {
    this.recipeForm = this.formBuilder.group({
      'name': this.formBuilder.control(null, Validators.required),
      'imagePath': this.formBuilder.control(null, Validators.required),
      'description': this.formBuilder.control(null, Validators.required),
      'ingredients': this.formBuilder.array([]),
    });

    if (this.editMode) {
      if (this.recipe.ingredients != null) {
        const ingredientControls = this.recipeForm.get('ingredients') as FormArray;

        for (const ingredient of this.recipe.ingredients) {
          const ingredientGroup = this.createIngredientControl(ingredient);
          ingredientControls.push(ingredientGroup);
        }
      }

      this.recipeForm.patchValue({
        'name': this.recipe.name,
        'imagePath': this.recipe.imagePath,
        'description': this.recipe.description,
      });
    }
  }

  private createIngredientControl(ingredient: Ingredient = null) {
    if (ingredient == null) {
      ingredient = new Ingredient(null, null);
    }

    const ingredientGroup = this.formBuilder.group({
      'name': this.formBuilder.control(ingredient.name, Validators.required),
      'amount': this.formBuilder.control(ingredient.amount, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)]),
    });

    return ingredientGroup;
  }
}
