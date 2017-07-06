import { Component } from '@angular/core';

/**
 * Generated class for the BottomFabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bottom-fab',
  templateUrl: 'bottom-fab.html'
})
export class BottomFabComponent {

  text: string;

  constructor() {
    console.log('Hello BottomFabComponent Component');
    this.text = 'Hello World';
  }

}
