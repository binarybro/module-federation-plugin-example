import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlightsSearchComponent} from './flights-search/flights-search.component';
import {RouterModule} from '@angular/router';
import {FLIGHTS_ROUTES} from './flights.routes';
import {LazyLoadingModule} from '../lazy-loading/lazy-loading.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    LazyLoadingModule
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule {
}
