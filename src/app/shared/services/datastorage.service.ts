import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { environment } from '../../../environments/environment';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put(`${environment.dbUrl}/recipes.json`, this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get(`${environment.dbUrl}/recipes.json`).subscribe(
            (response) => {
                const recipes: Recipe[] = response.json();
                console.table(recipes);
                this.recipeService.setRecipes(recipes);
            }
        );
    }

}
