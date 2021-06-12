import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  _url ='';
  constructor(private httpClient: HttpClient) {

  }

  checkoutFunc(user: User){
    return this.httpClient.post<any>(this._url, user)
  }
}
