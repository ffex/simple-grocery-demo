import { ICategory } from "./category.model";

export interface IProduct {
    
    name: string ;
    description?: string | null;
    icon: string ;
    frequency?: number | null;
    category: ICategory ;

  }
  
  export class Product implements IProduct {
    constructor(
        public name: string ,
        public icon: string ,
        public category: ICategory ,
        public description?: string | null,
        public frequency?: number | null,
            ) {}
  }

