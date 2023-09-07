import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.page.html',
  styleUrls: ['./veg.page.scss'],
})
export class VegPage implements OnInit {

  image: any;
  title:any;
  type:any;
  price: any;
  ingrediants:any;
  category:any;
  // Form: FormGroup;


  constructor(private formBuilder: FormBuilder) { 
    // this.Form = this.formBuilder.group({
    //   image: ['', [Validators.required]],
    //   title: ['', [Validators.required]],
    //   type: ['', [Validators.required]],
    //   price: ['', [Validators.required]],
    //   ingrediants: ['', [Validators.required]],
    //   category: ['', [Validators.required]]
    // });
  }

  ngOnInit() {
  }

  submitForm() {
    // if (this.Form.valid) {
    //   const formData = this.Form.value;
    //   console.log('Email:', formData.email);
    //   console.log('Password:', formData.password);
    // } else {
    //   // Handle form validation errors
    // }
  }
  }

