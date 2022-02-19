import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Nasi", "Nasi dari beras putih pilihan", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nasi_putih_in_Indonesia.JPG/1200px-Nasi_putih_in_Indonesia.JPG?20100530051647")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
