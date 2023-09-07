import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
//   const postsUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=YOUR_ACCESS_TOKEN';
// this.http.get(postsUrl).subscribe((response: { data: any; }) => {
//   const posts = response.data;
//   // Process and display the fetched posts
// });

// // Fetch comments
// const commentsUrl = `https://api.instagram.com/v1/media/${postId}/comments?access_token=YOUR_ACCESS_TOKEN`;
// this.http.get(commentsUrl).subscribe((response: { data: any; }) => {
//   const comments = response.data;
//   // Process and display the fetched comments
// });

// submitComment(Comment: string, postId: string) {
//   const commentUrl = `https://api.instagram.com/v1/media/${postId}/comments`;
//   const body = {
//     access_token: YOUR_ACCESS_TOKEN,
//     text: Comment
//   };
//   this.http.post(commentUrl, body).subscribe(() => {
//     // Handle the response, e.g., display a success message
//   });
// }

// // Reply submission
// submitReply(reply: string, Comment: string) {
//   const replyUrl = `https://api.instagram.com/v1/media/${commentId}/comments`;
//   const body = {
//     access_token: YOUR_ACCESS_TOKEN,
//     text: reply
//   };
//   this.http.post(replyUrl, body).subscribe(() => {
//     // Handle the response, e.g., display a success message
//   });
// }


// }
// function submitComment(comment: any, string: any, postId: any, string1: any) {
//   throw new Error('Function not implemented.');
// }

// function submitReply(reply: any, string: any, commentId: any, string1: any) {
//   throw new Error('Function not implemented.');
// }

