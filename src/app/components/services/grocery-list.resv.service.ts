import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { GroceryList } from "src/app/models/list.model";
import { GroceryListService } from "./grocery-list.service";

@Injectable()
export class GroceryListResolver implements Resolve<GroceryList>{
    /**
     *
     */
    constructor(private groceryListService: GroceryListService, private router: Router) {

    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): GroceryList | Observable<GroceryList> | Promise<GroceryList>  {
        const rec: GroceryList = this.groceryListService.selectList(+route.params['index']);
        if (rec == undefined) {
            this.router.navigate(['/home/main']);
            return rec!;

        } else {
            return rec!;
        }

    }

}