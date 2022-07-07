import {Component} from '@angular/core';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {
  showLazyButton = false;

  search(): void {
    this.showLazyButton = true;
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
