import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Burger', 'Delicious homemade burger',
      `https://images.unsplash.com/photo-1536510344784-b43e97721c1f?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
      [new Ingredient('beef', 300), new Ingredient('buns', 1), new Ingredient('letuce', 2), new Ingredient('tomato', 1)]),
    new Recipe('Blueberry pancakes', 'Improve your day and mood with some delicious pancakes',
      `https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`,
      [new Ingredient('milk', 250), new Ingredient('blueberries', 350), new Ingredient('flour', 200), new Ingredient('egg', 2)]),
    new Recipe('Waffles', 'Amazing waffles complemented with berries',
      `https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=
      rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`,
      [new Ingredient('milk', 250), new Ingredient('butter', 400), new Ingredient('flour', 200), new Ingredient('egg', 2)]),
  ];

  constructor(private readonly shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
