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
    });
  }

  /* This method save data */
  saveData(){
    console.log(this.form);
    
  }

}
