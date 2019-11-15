import { Component, OnInit } from '@angular/core';

import {Product} from './model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;


  constructor() { }

  ngOnInit() {

    this.product = {
      name: 'My Test Product',
      imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiMxT4c6TSRJ8UAtClMwiQeCWzonsTzDvXtCB0tSqGDEZAyBM&s',
      price: 50,
      isOnSale: true,
      quantityInCart: 0
      
    };
  }

  
    incrementInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }
  



}