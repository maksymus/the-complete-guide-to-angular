import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';


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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private recipeService: RecipeService) {}

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
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient() {
    const ingredientControl = this.createIngredientControl();

    const ingredientControls = this.recipeForm.get('ingredients') as FormArray;
    ingredientControls.push(ingredientControl);
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
