import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  /* Formbuilder helps to create forms swiftly */
  constructor(private fb: FormBuilder) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  get isValidName(){
    return (this.form.get('name').invalid && this.form.get('name').touched);
  }

  get isValidEmail(){
    return (this.form.get('mail').invalid && this.form.get('mail').touched);
  }

  get isValidLastName(){
    return (this.form.get('lastname').invalid && this.form.get('lastname').touched);
  }
  
  get isValidDistrict(){
    return (this.form.get('address.district').invalid && this.form.get('address.district').touched);
  }

  get isValidCity(){
    return (this.form.get('address.city').invalid && this.form.get('address.city').touched);
  }

  // This mehthod initialize the form
  initForm(){
    /* Here is defyning the form */
    this.form = this.fb.group({
      // [data, syncronus Validators, asynconus Validator]
      name:['',[
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      lastname:['',[
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      mail:['',[
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
        ]
      ],
      address:this.fb.group(
        {
          district:['',Validators.required],
          city:['',Validators.required],

        }
      )
    });
  }

  /* This method save data */
  saveData(){
    if(this.form.invalid){
      // Extract all values from the form 'f'
      Object.values( this.form.controls).forEach(ctr=>{
        // Mark the field like touched
        if(ctr instanceof FormGroup){
          Object.values( ctr.controls).forEach(ctr=>{ctr.markAsTouched()});
        }else{
          ctr.markAsTouched();
        }
      });
      return;
    }
    console.log(this.form);
    
  }

}
