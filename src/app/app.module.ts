import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './shopping/list/list.component';
import { EditComponent } from './shopping/edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './recipe/list/item/item.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HeaderComponent,
    ItemComponent,
    DetailComponent,
    RecipeComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
