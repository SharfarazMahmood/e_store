import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  title: string = "Product Details";
  @Input() productList: Product[] = [];
  @Input() product: Product = new Product ;
  @Input() quantity: number = 1;
  productId: number = -1;

  constructor(private productService: ProductService,
              private cartService: CartService, 
              private activatedRouteService: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let y: any = null as any;
    y = this.activatedRouteService.snapshot.paramMap.get('id');
    y= parseInt(y)
    this.productId = y;

    this.productService.getProductById(this.productId).subscribe(res =>{
      this.productList = res;
    })
  }

  addToCart(product: Product, quantity:number): void {
    if(quantity <= 0){
      alert("Quantity CANT NOT be less then 1 !");
    }else{
      this.cartService.addToCart(product, quantity);
      alert("Added!");
    }
  }

}
