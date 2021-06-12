import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product;
  @Input() quantity: number = 1;

  constructor(private cartService: CartService, private routerService: Router) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  onSelect(product: Product){
    this.routerService.navigate(['/productlist', product.id])
  }

  addToCart(product: Product, quantity: number): void {
    if(quantity <= 0){
      alert("Quantity CANT NOT be less then 1 !");
    }else{
      this.cartService.addToCart(product, quantity);
      alert("Added!");
    }
  }
}

