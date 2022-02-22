import { Injectable , EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Nasi", "Nasi dari beras putih pilihan", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nasi_putih_in_Indonesia.JPG/1200px-Nasi_putih_in_Indonesia.JPG?20100530051647"),
    new Recipe("Sate Ayam", "Sate terbuat dari daging ayam yang fresh dipotong dipagi hari", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sate_ayam_madura.jpg")
  ];


  getRecipes() {
    return this.recipes.slice(); // slice method give a duplicate of a new array from this service
  }



  constructor() { }
}
