import { Injectable } from '@angular/core';
import { Foods } from '../foods';
imp

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 getFoods() {
   return Foods;
 }
}
