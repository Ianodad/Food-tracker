import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';
@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

    newFood = new Food (0, '' , 0, '');

    @Output() addFood = new EventEmitter<Food>();

    submitGoal() {
        this.addFood.emit(this.newFood);
        this.newFood = new Food (0, '' , 0, '');

    }

  ngOnInit() {
  }

}
