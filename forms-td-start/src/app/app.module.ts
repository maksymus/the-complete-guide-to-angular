import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import {RouterModule, Routes} from "@angular/router";
import { TdformComponent } from './tdform/tdform.component';

const routes: Routes = [
  {path: '', redirectTo: '/tdform', pathMatch: 'full'},
  {path: 'tdform', component: TdformComponent},
  {path: 'assignment', component: AssignmentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    TdformComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
