import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsDetalisComponent } from './products-detalis/products-detalis.component';
import { CartsComponent } from './carts/carts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './spiner/spiner.component';
import { BoxComponent } from './all-products/box/box.component';
import { SelectComponent } from './all-products/select/select.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminEditionComponent } from './admin-edition/admin-edition.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllProductsComponent,
    ProductsDetalisComponent,
    CartsComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    SpinerComponent,
    BoxComponent,
    SelectComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminEditionComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
