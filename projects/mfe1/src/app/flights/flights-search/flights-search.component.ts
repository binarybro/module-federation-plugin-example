import {Component, ComponentFactoryResolver, Inject, Injector, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  showLazyButton = false;

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    @Inject(Injector) private injector,
    @Inject(ComponentFactoryResolver) private cfr) { }

  search(): void {
    this.showLazyButton = true;
  }

  terms(): void {

  }


}
