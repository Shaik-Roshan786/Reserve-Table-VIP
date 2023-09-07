import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.page.html',
  styleUrls: ['./rateus.page.scss'],
})
export class RateusPage implements OnInit {

  comments: any[] = [];
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
    // Retrieve comments from local storage
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  // submit() {
  //   const comm = (document.querySelector('ion-textarea') as HTMLIonTextareaElement).value;
  
  //   if (comm) {
  //     this.comments.push(comm);
  //     //localStorage.setItem('comments', JSON.stringify(this.comments));
  //     fetch("http://localhost:3001/menu/postschema/", { //  defines a constructor that takes an argument "formBuilder" of type FormBuilder
  //     method:'post',
  //     headers:{
  //      "Access-Contol-Allow-Origin": "*",
  //      "content-Type":'application/json'
  //     },
  //     // body:JSON.stringify(this.regForm.value)  // converts the form data to JSON string and sets it as the request body
  //   }).then(res=> res.json()) // converts result into json format
  //   .then(result=>{ 
  //     console.log(result) // Displays the Result in Console
  //   // console.log(this.regForm)
  //  }).catch(err =>
  //    console.log(err))
  //   }
     



  //   this.setOpen(false);
  // }

  submit() {
    const comm = (document.querySelector('ion-textarea') as HTMLIonTextareaElement).value;
  
    if (comm) {
      this.comments.push({ comment: comm }); // Push the comment as an object to the comments array
      // Perform the POST request with the comment data
      fetch("http://localhost:3001/menu/postschema/", {
        method: 'post',
        headers: {
          "Access-Contol-Allow-Origin": "*",
          "content-Type": 'application/json'
        },
        body: JSON.stringify({ comment: comm }) // Include the comment as the request body
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    }
  
    this.setOpen(false);
  }

  
get() {
      fetch("http://localhost:3001/menu/comments/", { //  defines a constructor that takes an argument "formBuilder" of type FormBuilder
      method:'get',
      headers: {
        "Access-Control-Allow-Origin": "*",     
      },   
      // body:JSON.stringify(this.regForm.value)  // converts the form data to JSON string and sets it as the request body
    }).then(res=> res.json()) // converts result into json format
    .then(result=>{ 
      //console.log(result)
      this.comments=result.menus // Displays the Result in Console'
      console.log(this.comments)
   // console.log(comments)
   }).catch(err =>
     console.log(err))
    }
    
    reply() {
      
    }





}
  

  
