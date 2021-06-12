import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  cartTotal = 0;
  currentUser: User = new User();

  constructor(private cartService: CartService, 
              private router: Router){ }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
  }

  removeItem(item: CartItem): void{
    // console.log(item)
    this.cartService.removeItemFromCart(item)
    this.cartItems = this.cartService.getCartItems()
  }
  
  clearCart(){
    this.cartService.clearCart();
    this.cartItems = [];
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  getTotal(): number {
    return this.cartTotal = this.cartService.getCartTotal();
  }

  onSubmit(){
    console.log( this.currentUser.userName, this.cartTotal )
    this.router.navigate(['/confirmation', this.currentUser.userName, this.cartTotal])
  }
}
