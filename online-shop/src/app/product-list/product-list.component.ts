import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Product, products, ProductViewModel } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() {}

  ngOnInit(): void {
    
  }
  
}
