import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  User={
    name:"Rodrigo"
  };

  constructor() { }

  ngOnInit(): void {
  }


  saveData(f: NgForm){
    console.log("Data saved!!", f);
  }
}
