import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  comments: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  submit() {
    
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



}
