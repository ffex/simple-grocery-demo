import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { IGroceryListProduct } from 'src/app/models/list-product.model';
import { IGroceryList } from 'src/app/models/list.model';
import { IProduct } from 'src/app/models/product.model';
import { GroceryListService } from '../services/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  @Input() listProducts?:IGroceryListProduct[];
  @Input() list?:IGroceryList;
  
  constructor(private route: ActivatedRoute, private groceryListService: GroceryListService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.list = data['list'];
        this.groceryListService.getProductsXList().then(
          (response:IGroceryListProduct[]) => {
    
            this.listProducts=response;
            console.log("this.lists.length");
            console.log(this.listProducts);
          }
        );
        console.log("list:");
        console.log(this.list);
      }
    );
    
  }

}
