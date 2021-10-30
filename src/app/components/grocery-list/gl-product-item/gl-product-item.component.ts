import { Component, Input, OnInit } from '@angular/core';
import { IGroceryList } from 'src/app/models/list.model';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-gl-product-item',
  templateUrl: './gl-product-item.component.html',
  styleUrls: ['./gl-product-item.component.css']
})
export class GlProductItemComponent implements OnInit {
@Input() product!:IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
