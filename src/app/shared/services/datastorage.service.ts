import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeRecipes() {
        return this.http.put(`${environment.dbUrl}/recipes.json`, this.recipeService.getRecipes());
    }

}
