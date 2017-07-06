import { Component , Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input('myTitle') myTitle;
  text:String;

  constructor() {
  }

  ngAfterViewInit() {
    this.text = this.myTitle;
  }

}
