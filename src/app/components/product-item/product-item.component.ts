import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { GroceryListService } from '../services/grocery-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!:Product;
  constructor(private groceryListService:GroceryListService) { }

  ngOnInit(): void {
  }

  addProductToListClick():void{
this.groceryListService.addProductToList(this.product);
  }

}
