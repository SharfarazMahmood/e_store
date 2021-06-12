import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dataUrl = "../../assets/data.json";
  productList: Observable<Product[]>;

  constructor( private http: HttpClient) { 
    this.productList = this.getProducts()
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl).pipe(
      map(result =>
        result.filter(one => one.id === id)
      )
    );
  }
}


