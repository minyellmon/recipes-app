import {Component, OnInit} from '@angular/core';
import {RecipeService} from "./service/recipe.service";
import {Observable} from "rxjs";
import {Recipe} from "./model/recipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private recipeService:RecipeService) {

  }


  ngOnInit(): void {


  }
  }
