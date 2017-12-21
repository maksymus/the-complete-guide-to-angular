import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import {AppState} from "../../store/app.reducers";
import {State} from '../../auth/store/auth.reducers';
import {Logout} from "../../auth/store/auth.actions";
import {Subject} from "rxjs/Subject";
import {RecipeService} from "../../recipes/recipe.service";
import {Recipe} from "../../recipes/recipe.model";
import {FetchRecipes, StoreRecipes} from "../../recipes/store/recipe.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState: Observable<State>;

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private router: Router,
              private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new StoreRecipes());

    // const recipes = this.recipeService.getRecipes();
    // const responseObservable = this.dataStorageService.storeRecipes(recipes);
    // responseObservable.subscribe(
    //   (response: Response) => console.log(response),
    //   (error: Response) => console.log(error)
    // );
  }

  onFetchData() {
    this.store.dispatch(new FetchRecipes());

    // const responseObesrvable = this.dataStorageService.fetchRecipes();
    // responseObesrvable.subscribe(
    //   (recipes: Recipe[]) => this.recipeService.setRecipes(recipes),
    //   (error: Response) => console.log(error)
    // );
  }

  onSignOut() {
    this.store.dispatch(new Logout());

    // this.authService.logout();
    // this.router.navigate(['/']);
  }
}
