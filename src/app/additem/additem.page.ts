import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
  
})

export class AdditemPage implements OnInit {
  menu = false;
  itemForm: any;
  

  constructor(
    // private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    // this.itemForm = this.formBuilder.group({
    //   image: ['', Validators.required],
    //   title: ['', Validators.required],
    //   price: ['', Validators.required],
    //   ingredients: ['', Validators.required],
    // });
  }
  canDismiss = async () => {
  
 
    window.location.href=("/tabs/tab1")

    
    
  };

  show() {
    this.menu=true;
  }

  hide() {
    this.menu=false;
  }

  
  hidee() {
    this.menu=false;
  }

  addItem() {
    if (this.itemForm.valid) {
      // Retrieve the form values
      const formValues = this.itemForm.value;

      // Perform necessary actions with the form values (e.g., saving to a database)
      console.log(formValues);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }



}
