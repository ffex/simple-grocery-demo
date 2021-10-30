import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/helpers/api';
import { Category, ICategory } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  categories: ICategory[] = [];

  addCategory=false;
  addProduct=false;
  prod?: Product;
  constructor() {



  }

  ngOnInit(): void {
    let promise = Api.provider().database.listDocuments('61770251bc7e6');


    promise.then((response:any) => {
      this.categories = response.documents;
      this.prod={
        name:"tomato",
        icon:'tomato',
        category: this.categories[0]
    
      }
      console.log(response);
    }, function (error) {
      console.log(error); // Failure
    });
  }
  addCategoryClick():void{

    this.addCategory = true;
  }




}
