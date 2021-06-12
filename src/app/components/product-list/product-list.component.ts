import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string ="Product List";

  @Input() productList: Product[] = [];

  constructor(private productService: ProductService ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      this.productList = res;
    }) ;
  }

}