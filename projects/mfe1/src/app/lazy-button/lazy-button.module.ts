import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyButtonComponent} from './lazy-button.component';


@NgModule({
  declarations: [LazyButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [LazyButtonComponent]
})
export class LazyButtonModule {
  public static entryComponent = LazyButtonComponent;
}
