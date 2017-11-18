import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AssignmentComponent} from "./assignment/assignment.component";
import {ReactFormComponent} from "./react-form/react-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/reactform', pathMatch: 'full'},
  {path: 'reactform', component: ReactFormComponent},
  {path: 'assignment', component: AssignmentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReactFormComponent,
    AssignmentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
