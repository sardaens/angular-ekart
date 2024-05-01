import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  burgers = 3;
  pizzas = 5;
  totalItems=0;

  constructor() {
    this.calculateTotalItems();
  }

  burgersChanged(count: number){
    this.burgers = count;
    this.calculateTotalItems();
  }

  pizzasChanged(count: number){
    this.pizzas = count;
    this.calculateTotalItems();
  }

  calculateTotalItems(){
    this.totalItems = this.burgers + this.pizzas;
  }
}
