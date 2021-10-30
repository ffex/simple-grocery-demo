
export interface IGroceryList {
  $id?:string;
    name: string ;
    description?: string | null;
    onetime:boolean


  }
  
  export class GroceryList implements IGroceryList{
    /**
     *
     */

    constructor(
        public name: string ,
        public onetime:boolean,
        public description?: string | null,
        public $id?:string
            ) {}
  }

