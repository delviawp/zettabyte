import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
     // { id: 1, proudctId: 1, productName: 'Test 1', qty: 4, price: 100 },
    // { id: 2, proudctId: 3, productName: 'Test 3', qty: 5, price: 50 },
    // { id: 3, proudctId: 2, productName: 'Test 2', qty: 3, price: 150 },
    // { id: 4, pr
  ]

  constructor() { }

  ngOnInit(): void {
  }

}