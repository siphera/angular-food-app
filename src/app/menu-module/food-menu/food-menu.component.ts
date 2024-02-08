import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {
  foodItems = [
    { name: 'Pizza', description: 'Cheesy pizza', price: 10, available: true },
    { name: 'Burger', description: 'Juicy burger', price: 7, available: true },
    { name: 'Pie', description: 'Chicken pie', price: 30, available: true },
    { name: 'Drinks', description: 'Fanta pine', price: 15, available: true },
  ];

  // foodItems = [
  //   {category: 'Pizza', items: [{name: 'Margherita', available: true}, {name: 'Pepperoni', available: false }] },
  //   {category: 'Burgers', items: [{name: 'Cheeseburger', available: true}, {name: 'Veggie Burger', available: true }] },
  //   {category: 'Desserts', items: [{name: 'Cheese Cake', available: true}, {name: 'Apple Pie', available: false }] },
  // ];

  showDetails(item: any) {
    alert(`Details of ${item.name}`);
  }
}
