import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.page.html',
  styleUrls: ['./like.page.scss'],
})
export class LikePage implements OnInit {
  likedByList: string[] = [];
  postIds: any[] = [];
  

  constructor() { }

  ngOnInit() {
  }

  toggleLike(postId: any) {
    
  }

  get() {
    const endpoint = 'http://localhost:4000/Post/getposts';

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.postIds = data.map((post: { _id: any; }) => post._id);
      })
      .catch(error => {
        console.log(error); // Handle any errors that occurred during the fetch
      });
  }
}