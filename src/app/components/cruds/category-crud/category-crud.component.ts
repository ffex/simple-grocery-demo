import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { GroceryListService } from '../../services/grocery-list.service';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCrudComponent implements OnInit {
 @Input() display=false;
 @Output() displayChange=new EventEmitter<boolean>();

  editForm: FormGroup = this.fb.group({

    name: [],
    description: [],

  });
  constructor(protected fb: FormBuilder,protected groceryListService:GroceryListService) { }

  ngOnInit(): void {
  }
  hiding():void{
    this.displayChange.emit(false);
  }

  submit(): void {
    console.log("submit!");
    const categ:Category= new Category(
      this.editForm.get(["name"])!.value,
      this.editForm.get(["description"])!.value);
      
      
      this.groceryListService.addCategory(categ);
    

  }


}
