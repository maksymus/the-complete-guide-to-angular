import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Recipe} from '../recipe.model';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;

  recipe: Recipe;
  editMode = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.editMode = false;

    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
      this.editMode = this.recipe != null;
      this.initRecipeForm();
    });

    this.initRecipeForm();
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initRecipeForm() {
    this.recipeForm = this.formBuilder.group({
      'name': this.formBuilder.control(null),
      'imagePath': this.formBuilder.control(null),
      'description': this.formBuilder.control(null)
    });

    if (this.editMode) {
      this.recipeForm.setValue({
        'name': this.recipe.name,
        'imagePath': this.recipe.imagePath,
        'description': this.recipe.description,
      });
    }
  }
}
