import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.page.html',
  styleUrls: ['./myposts.page.scss'],
})
export class MypostsPage implements OnInit {

  posts = true;
  constructor() { }

  ngOnInit() {
  }


  show() {
    this.posts=true;
  }

  

  post() {

  }

}
