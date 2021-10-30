import { Component, Input, OnInit } from '@angular/core';
import { IGroceryList } from 'src/app/models/list.model';

@Component({
  selector: 'app-gls-product-item',
  templateUrl: './gls-product-item.component.html',
  styleUrls: ['./gls-product-item.component.css']
})
export class GlsProductItemComponent implements OnInit {

  @Input() list!:IGroceryList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
