import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookStoreAppComponent } from './components/book-store-app/book-store-app.component';
import { FiltersComponent } from './components/book-store-app/filters/filters.component';
import { ProductListComponent } from './components/book-store-app/product-list/product-list.component';
import { ProductItemComponent } from './components/book-store-app/product-list/product-item/product-item.component';
import { ProductListService } from './components/book-store-app/product-list/services/product-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookStoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
