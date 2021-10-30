import { Component, Input, OnInit } from '@angular/core';
import { Api } from 'src/app/helpers/api';
import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  @Input() category!:ICategory;
  products: IProduct[] = [];

  addProduct=false;
  constructor() { }

  ngOnInit(): void {
    let promise = Api.provider().database.listDocuments('61770170e9732',["category.$id=" + this.category.$id]);


    promise.then((response:any) => {
      this.products = response.documents;
      console.log(response);
    }, function (error) {
      console.log(error); // Failure
    });
  }
  addProductClick():void{

    this.addProduct = true;
  }
}
