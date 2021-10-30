import { IGroceryList } from "./list.model";
import { IProduct } from "./product.model";

export interface IGroceryListProduct {
    
    list : IGroceryList;
    product: IProduct;



  }
  
  export class GroceryListProduct implements IGroceryListProduct{
    constructor(
        public list : IGroceryList,
        public product: IProduct,
            ) {}
  }

