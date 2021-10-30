import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroceryList } from 'src/app/models/list.model';
import { GroceryListService } from '../../services/grocery-list.service';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.css']
})
export class ListCrudComponent implements OnInit {
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
    const list:GroceryList= new GroceryList(
      this.editForm.get(["name"])!.value,
      this.editForm.get(["description"])!.value);
      
      
      this.groceryListService.addList(list);
    

  }
}
