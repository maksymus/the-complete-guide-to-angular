import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeResolver, RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeResolver, RecipeService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
