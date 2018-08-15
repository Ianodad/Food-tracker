import { Foods } from './../foods';
import { FoodService } from './../food-service/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  providers: [FoodService],
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

    foods = Foods
    // foods: Foods [];
    constructor(foodService: FoodService) {
      this.foods = foodService.getFoods();
       }

  ngOnInit() {
  }

}
