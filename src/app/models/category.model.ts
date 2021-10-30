
export interface ICategory {
    $id?:string;
    name: string ;
    description?: string | null;


  }
  
  export class Category implements ICategory{
    constructor(
      public name: string ,
      public description?: string | null,
      public $id?:string,
      ) {}
  }

