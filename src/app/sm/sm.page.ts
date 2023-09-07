import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.page.html',
  styleUrls: ['./sm.page.scss'],
})
export class SmPage implements OnInit {
  isLiked: boolean = false;
  likedBy: number = 0;

  constructor() { }

  ngOnInit() {
  }
 
  //   likePost() {
  //   const postId = 'POST_ID'; // Replace with the actual post ID
  //   const userName = 'USER_NAME'; // Replace with the actual user name
  
  //   fetch(`/like/${postId}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       userName: userName
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // Handle the response data or perform any necessary actions
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);
  //     });
  // }

 
  // likePost() {
  //   const postId = '64ab927fff595e2953e55a20'; // Replace with the actual postId
  //   const endpoint = `http://localhost:4000/Post/posts/64a66d8e9d8d024e4ed320db/likes`;
  //  let count=0
  //   fetch(endpoint, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ likes: count+=1 }), // Replace with the desired newLikesCount
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data); // Handle the response from the backend
  //     })
  //     .catch(error => {
  //       console.log(error); // Handle any errors that occurred during the fetch
  //     });
  //   //this.isLiked = !this.isLiked;
  //   // if (this.isLiked) {
  //   //   this.likedBy -= 1; // Decrease the likedBy count
  //   // } else {
  //   //   this.likedBy += 1; // Increase the likedBy count
  //   // }
  //   // this.isLiked = !this.isLiked;
  //   // console.log(this.likedBy)
  //   // fetch('http://localhost:4000/Post/getlikeId')
  //   // .then(response => response.json())
  //   // .then(data => {
  //   //   console.log(data); // Do something with the retrieved data
  //   // })
  //   // .catch(error => {
  //   //   console.log(error); // Handle any errors that occurred during the fetch
  //   // });

  // }
  likePost() {
    const postId = '64ab927fff595e2953e55a20'; // Replace with the actual postId
    const endpoint = `http://localhost:4000/posts/${postId}/likes`;
  
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const currentLikesCount = data.likes; // Get the current likes count from the response
        const newLikesCount = currentLikesCount + 1; // Increment the likes count by 1
  
        fetch(endpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likes: newLikesCount }),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data); // Handle the response from the backend
          })
          .catch(error => {
            console.log(error); // Handle any errors that occurred during the fetch
          });
      })
      .catch(error => {
        console.log(error); // Handle any errors that occurred during the fetch
      });
  }
  
 
  get() {
    fetch('http://localhost:4000/Post/getpostId')
    .then(response => response.json())
    .then(data => {
      console.log(data); // Do something with the retrieved data
    })
    .catch(error => {
      console.log(error); // Handle any errors that occurred during the fetch
    });
  }
  

}
  

