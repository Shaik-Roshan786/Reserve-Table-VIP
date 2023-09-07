import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  quantity: number = 1;
  hide=false;
  add=true;

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
cart(){
  this.hide=true;
  this.add=false
}
}
