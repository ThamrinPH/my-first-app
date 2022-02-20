import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Nasi", "Nasi dari beras putih pilihan", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nasi_putih_in_Indonesia.JPG/1200px-Nasi_putih_in_Indonesia.JPG?20100530051647"),
    new Recipe("Sate Ayam", "Sate terbuat dari daging ayam yang fresh dipotong dipagi hari", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sate_ayam_madura.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
