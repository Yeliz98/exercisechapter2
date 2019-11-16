import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductQuantityChange } from '../../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  template: `
    <app-product-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products"></app-product-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Test Product - 1',
        imageUrl: 'https://www.annakait.com/wp-content/uploads/2016/11/annakait-nero-kette-mini-gold-150x150.jpg',
        price: 50,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Test Product - 2',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiMxT4c6TSRJ8UAtClMwiQeCWzonsTzDvXtCB0tSqGDEZAyBM&s',
        price: 150,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Test Product - 3',
        imageUrl: 'https://lovelysloth.com/wp-content/uploads/2018/05/palmenblatt-kette-bronze-rueckseite-lovelysloth-150x150.jpg',
        price: 250,
        isOnSale: true,
        quantityInCart: 0
      }
    ];
  }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    product.quantityInCart += change.changeInQuantity;
  }

}