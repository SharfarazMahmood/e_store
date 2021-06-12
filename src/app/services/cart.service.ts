import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  cartTotal = 0;
  constructor() {
      this.cartItems = 
      [
        // { id: 1,
        //   name: "Book",
        //   price: 9.99,
        //   url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        //   quantity:3
        // },
        // { id: 1,
        //   name: "Book",
        //   price: 9.99,
        //   url: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        //   quantity:3
        // }
      ]
   }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number) {
    const item = new CartItem()
    item.id = product.id
    item.name = product.name
    item.price = product.price
    item.url = product.url
    item.quantity = quantity
    
    let itemExist: Boolean=false;
    let existingIndex: number = -1;
    this.cartItems.forEach((element,index)=>{
      if(element.id==item.id){
        itemExist = true;
        existingIndex = index;
      }
    })
    if (itemExist){
      this.cartItems[existingIndex].quantity += item.quantity;
    }else{
      this.cartItems.push(item)
    }
    return this.cartItems;
  }

  getCartTotal(): number{
    this.cartTotal = 0
    if (this.cartItems.length > 0){
      this.cartItems.forEach(item => {
        this.cartTotal += (item.price * item.quantity);
      });
      return this.cartTotal
    }
    return this.cartTotal
  }

  removeItemFromCart(cartItem: CartItem){
    const index = this.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}





