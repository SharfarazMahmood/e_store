import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {
  userName: string = '';
  totalAmmount: number= 0.0;

  constructor(private activatedRouteService: ActivatedRoute, 
      	      private cartService: CartService) {
  }

  ngOnInit(): void {
    let y: any = null as any;
    y = this.activatedRouteService.snapshot.paramMap.get('userName');
    this.userName = y

    let t: any = null as any;
    t = this.activatedRouteService.snapshot.paramMap.get('totalCost');
    t = parseFloat(t)
    this.totalAmmount = t

    console.log( y, this.userName, t, this.totalAmmount )
    this.cartService.clearCart();
  }

}

