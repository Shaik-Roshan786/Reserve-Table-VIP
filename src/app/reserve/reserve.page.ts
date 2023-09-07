import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
})
export class ReservePage implements OnInit {
  quantity: number = 1;

  constructor() { }

  ngOnInit() {
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
  increaseQuantity() {
    this.quantity++;
  }

}
