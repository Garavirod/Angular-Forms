import { ValidatorsService } from './../../services/validators.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  form: FormGroup;

  /* Formbuilder helps to create forms swiftly */
  constructor(
      private fb: FormBuilder,
      private validators: ValidatorsService
    ) {
    this.initForm();
    // this.loadDataForm();
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

  get isValidHobbie(){
    return (this.form.get('hobbie').invalid && this.form.get('hobbie').touched);
    
  }

  get disabledButtonAdd(){
    return !(this.form.get('hobbie').value != "")
  }

  get getHobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  // This mehthod initialize the form
  initForm(){
    /* Here is defyning the form */
    this.form = this.fb.group({
      // [data, syncronus Validators, asynconus Validator]
      name:['',[
          Validators.required,
          Validators.minLength(6),
          this.validators.noData
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
      ),
      hobbie:['',Validators.required],
      // Array of controls (form)
      hobbies:this.fb.array([]),
    });
  }

  /* Load data when form is initializated */
  // loadDataForm(){
  //   this.form.setValue({
  //     name:"Rodrigo",
  //     lastname:"García",
  //     mail:"rodrigo12@gmail.com",
  //     address:{
  //       district:"CDMX",
  //       city:"México"
  //     },
  //     hobbies:[]
  //   });
  // }


  /* Add hobbies */

  addHobbie(){
    this.getHobbies.push(this.fb.control(this.form.get('hobbie').value,Validators.required));
  }

  /* Delete hobbie */
  deleteHobbie(i:number){
    this.getHobbies.removeAt(i);
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
    this.form.reset({
      name:"Samantha"
    });
    
  }

}
