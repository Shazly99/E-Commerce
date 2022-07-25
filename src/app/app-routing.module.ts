import { UserInfoComponent } from './user-info/user-info.component';
import { AdminEditionComponent } from './admin-edition/admin-edition.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './authentication.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartsComponent } from './carts/carts.component';
import { ProductsDetalisComponent } from './products-detalis/products-detalis.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:'Product',pathMatch:'full'},
  
  {path:'Product' ,canActivate:[AuthenticationGuard] , component:AllProductsComponent},
  {path:'admin' ,canActivate:[AuthenticationGuard] ,component:AdminComponent},
  {path:'update&add_prodect' ,canActivate:[AuthenticationGuard] ,component:AdminEditionComponent},
  {path:'userInfo' ,canActivate:[AuthenticationGuard] , component:UserInfoComponent},
  {path:'content' ,canActivate:[AuthenticationGuard] , component:ContentComponent},
  {path:'ProductsDetalis/:id' , canActivate:[AuthenticationGuard] ,component:ProductsDetalisComponent},
  {path:'Carts' ,canActivate:[AuthenticationGuard] , component:CartsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'**' , component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
