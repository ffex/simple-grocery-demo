import { Component, Input, OnInit } from '@angular/core';
import { GroceryList, IGroceryList } from 'src/app/models/list.model';
import { GroceryListService } from '../services/grocery-list.service';

@Component({
  selector: 'app-grocery-lists',
  templateUrl: './grocery-lists.component.html',
  styleUrls: ['./grocery-lists.component.css']
})
export class GroceryListsComponent implements OnInit {
//TODO Update list when I insert, close dialog

  lists?: IGroceryList[]=[];
  addList = false;

  constructor(protected groceryListService: GroceryListService) { }

  ngOnInit(): void {

     this.groceryListService.getAllListes().then(
      (response:IGroceryList[]) => {

        this.lists=response;
        console.log("this.lists.length");
        console.log(this.lists);
      }
    ); 
    this.groceryListService.listsUpdated.subscribe((list:IGroceryList[]) => {
      this.lists=list;

    })
  }
  addListClick(): void {

    this.addList = true;
  }
}
