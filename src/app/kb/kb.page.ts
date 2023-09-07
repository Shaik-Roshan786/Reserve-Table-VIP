import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kb',
  templateUrl: './kb.page.html',
  styleUrls: ['./kb.page.scss'],
})
export class KbPage implements OnInit {
  menu = false;
  constructor() { }

  ngOnInit() {
  }

  show() {
    this.menu=true;
  }

  hide() {
    this.menu=false;
  }

  
  hidee() {
    this.menu=false;
  }



}
