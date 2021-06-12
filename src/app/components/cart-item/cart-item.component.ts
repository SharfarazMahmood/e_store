import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartitem: CartItem = new CartItem();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter
  constructor() { }

  ngOnInit(): void {}

  remove(item: CartItem): void{
    this.removeItem.emit(item)
  }

}
