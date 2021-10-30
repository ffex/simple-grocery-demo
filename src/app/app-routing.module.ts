import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { LoginComponent } from './components/login/login.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { GroceryListResolver } from './components/services/grocery-list.resv.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: LoginLayoutComponent, children: [
      {
        path: '', // child route path
        component: LoginComponent, // child route component that the router renders
      },
      { path: 'signup', component: SignupComponent },
    ]
  },
  { path: 'home', component: MainLayoutComponent, children: [
    {path:'main',component: MainContainerComponent,children:[
      {path:'',component: GroceryListComponent},
      {path:':index',component: GroceryListComponent, resolve:{list:GroceryListResolver}},
    ]},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
