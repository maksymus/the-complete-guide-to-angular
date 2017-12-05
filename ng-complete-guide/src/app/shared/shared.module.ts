import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective} from "./dropdown.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ],
  providers: []   // NEVER add providers (services) to shared modules !!!!
})
export class SharedModule { }
