import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

  private products: Product[];
  constructor() {
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

  getProducts(): Observable<Product[]> {
    return Observable.of(this.products);
  }

  changeQuantity(id: number, changeInQuantity: number): Observable<Product> {
    const product = this.products
        .find(prod => prod.id === id);
    product.quantityInCart += changeInQuantity;
    return Observable.of(product);
  }

  createProduct(product: Product): Observable<any> {
    let productClone = Object.assign({}, product);;
    productClone.id = this.products.length + 1;
    productClone.quantityInCart = 0;
    this.products.push(productClone);
    return Observable.of(productClone);
  }
}