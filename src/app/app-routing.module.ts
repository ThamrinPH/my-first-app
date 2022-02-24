import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeInfoComponent } from "./recipe/recipe-info/recipe-info.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";

const AppRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: RecipeInfoComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ]},
    { path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(AppRoutes)]
})
export class AppRoutingModule {}