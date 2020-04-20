import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid';
  grid:boolean=true
  gridCount=Array(21)
  toggele(){
    this.grid = !this.grid
  }
}
