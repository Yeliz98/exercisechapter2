import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductQuantityChange } from '../../model/product-quantity-change';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <app-product-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products$ | async"></app-product-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.changeInQuantity);
  }
}

/*
'https://www.annakait.com/wp-content/uploads/2016/11/annakait-nero-kette-mini-gold-150x150.jpg'

'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiMxT4c6TSRJ8UAtClMwiQeCWzonsTzDvXtCB0tSqGDEZAyBM&s'


'https://lovelysloth.com/wp-content/uploads/2018/05/palmenblatt-kette-bronze-rueckseite-lovelysloth-150x150.jpg',


*/