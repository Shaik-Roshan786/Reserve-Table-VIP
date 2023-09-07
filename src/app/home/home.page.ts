import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
