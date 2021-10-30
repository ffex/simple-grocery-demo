import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { SignupComponent } from './components/signup/signup.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsPageComponent } from './components/products-list/products-page/products-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import {TabViewModule} from 'primeng/tabview';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {MenubarModule} from 'primeng/menubar';
import { CategoryCrudComponent } from './components/cruds/category-crud/category-crud.component';
import { ProductCrudComponent } from './components/cruds/product-crud/product-crud.component';

import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GroceryListsComponent } from './components/grocery-lists/grocery-lists.component';
import { GlProductItemComponent } from './components/grocery-list/gl-product-item/gl-product-item.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { GlsProductItemComponent } from './components/grocery-lists/gls-product-item/gls-product-item.component';
import { ListCrudComponent } from './components/cruds/list-crud/list-crud.component';
import { GroceryListResolver } from './components/services/grocery-list.resv.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductsListComponent,
    ProductsPageComponent,
    ProductItemComponent,
    GroceryListComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    CategoryCrudComponent,
    ProductCrudComponent,
    GroceryListsComponent,
    GlProductItemComponent,
    MainContainerComponent,
    GlsProductItemComponent,
    ListCrudComponent,
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FormsModule, ReactiveFormsModule,
    TabViewModule,
    MenubarModule,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    
  ],
  providers: [GroceryListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
