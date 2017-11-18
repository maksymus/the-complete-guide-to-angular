import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccesAllertComponent } from './assignments/alert/succes-allert/succes-allert.component';
import { WarmingAlertComponent } from './assignments/alert/warming-alert/warming-alert.component';
import { BindingTestComponent } from './binding/binding-test/binding-test.component';
import { DirectiveTestComponent } from './assignments/directives/directive-test.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccesAllertComponent,
    WarmingAlertComponent,
    BindingTestComponent,
    DirectiveTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
