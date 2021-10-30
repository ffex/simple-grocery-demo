import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { GroceryListService } from '../../services/grocery-list.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  @Input() display=false;
  @Input() category!:Category;

  @Output() displayChange=new EventEmitter<boolean>();

  product?:Product;

  editForm: FormGroup = this.fb.group({

    name: [],
    description: [],
    icon:[],
    category:[],

  });


  constructor(protected fb: FormBuilder,protected groceryListService:GroceryListService) { 

  }

  ngOnInit(): void {
  }

  hiding():void{
    this.displayChange.emit(false);
  }
  submit(): void {
    const prod:Product= new Product(
      this.editForm.get(["name"])!.value,
      this.editForm.get(["icon"])!.value,
      this.category,
      this.editForm.get(["description"])!.value,
      undefined);
      console.log("submit prod!");
      console.log(prod);
      
      this.groceryListService.addProduct(prod);
    

  
  }
}
