import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
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
