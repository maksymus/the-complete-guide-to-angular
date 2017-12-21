import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient, HttpParams} from "@angular/common/http";

import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {AuthService} from "../auth/auth.service";
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {

  private RECIPES_STORAGE = 'https://ng-complete-guide-74b69.firebaseio.com/recipes.json';

  constructor(private http: HttpClient) {}

  storeRecipes(recipes: Recipe[]) {
    // const token = this.authService.getToken();
    // const httpParams = new HttpParams().append('auth', token);
    // return this.http.put(this.RECIPES_STORAGE, this.recipeService.getRecipes(), { params: httpParams });

    return this.http.put(this.RECIPES_STORAGE, recipes);
  }

  fetchRecipes() {
    // const token = this.authService.getToken();
    // const httpParams = new HttpParams().append('auth', token);
    //
    // return this.http.get(this.RECIPES_STORAGE, { observe: 'body', responseType: 'json', params: httpParams })
    //   .subscribe(
    //     (recipes: Recipe[]) => this.recipeService.setRecipes(recipes),
    //     (error: Response) => console.log(error)
    //     );

    return this.http.get(this.RECIPES_STORAGE, { observe: 'body', responseType: 'json'});
  }
}
