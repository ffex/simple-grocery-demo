import { EventEmitter, Injectable } from '@angular/core';
import { Observable,of,from, merge } from 'rxjs';
import { map } from 'rxjs/operators';


import { Api } from 'src/app/helpers/api';
import { Category } from 'src/app/models/category.model';
import { GroceryListProduct, IGroceryListProduct } from 'src/app/models/list-product.model';
import { GroceryList, IGroceryList } from 'src/app/models/list.model';
import { IProduct, Product } from 'src/app/models/product.model';
import { Server } from '../../utils/config';

@Injectable({
    providedIn: 'root',
})
export class GroceryListService {

    lists:IGroceryList[] = [];
    listProducts:IGroceryListProduct[] = [];
    listsUpdated= new EventEmitter<IGroceryList[]>();
    
    currentIndex=-1;
    currentList?:IGroceryList;
    constructor() { }

    addProduct(prod: Product): number {
        let promise = Api.provider().database.createDocument(Server.productsColID, prod);
        let result=0;
        promise.then(function (response) {

            console.log(response); // Success
        }, function (error) {

            console.log(error); // Failure
        });
        
        return 0;
    }
    addCategory(cat: Category): number {

        let promise = Api.provider().database.createDocument(Server.categoryColID, cat);
        let result=0;
        promise.then(function (response) {

            console.log(response); // Success
        }, function (error) {

            console.log(error); // Failure
        });

        return 0;
    }
    addList(list:GroceryList):number{
        
        let promise = Api.provider().database.createDocument(Server.listColID, list);

        promise.then(function (response) {
            
            console.log(response); // Success
            
        }, function (error) {

            console.log(error); // Failure
        });
        this.lists.push(list);
        this.listsUpdated.emit(this.lists);
    
        return 0;
    }
    async getAllListes():Promise<IGroceryList[]>{
        let promise = Api.provider().database.listDocuments(Server.listColID);


        await promise.then((response:any) => {
          this.lists = response.documents;
        }, function (error) {
            console.log("getAllListes");
          console.log(error); // Failure
        });
        return this.lists;
        
    }



    public selectList(index: number):GroceryList {
        if (this.currentIndex == index) {
            return this.currentList!;
        } else {
            this.currentIndex = index;
            //this.currentRecipe = deepCopyFunction(this.recipies[index]);
            this.currentList=this.lists[index];
            return this.currentList;
        }
    }

    async getProductsXList():Promise<IGroceryListProduct[]>{
        let promise = Api.provider().database.listDocuments(Server.listProductColID,["list.$id=" + this.currentList!.$id]);


        await promise.then((response:any) => {
          this.listProducts = response.documents;
          console.log(response);
        }, function (error) {
          console.log(error); // Failure
        });
        return this.listProducts;
    }
    addProductToList(prod:Product ):void{
        console.log(this.currentList);
        const prodXList=new GroceryListProduct(this.currentList!,prod);
        let promise = Api.provider().database.createDocument(Server.listProductColID, prodXList);

        promise.then(function (response) {
            
            console.log(response); // Success
        }, function (error) {

            console.log(error); // Failure
        });
    }

}