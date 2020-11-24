import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  User={
    name:"",
    lastName:"",
    email:""
  };

  countries: any [] = [];

  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
    // This return an observable so we need to subscribe  for catchin data
    this.countryService.getCountries().subscribe(countries=>{
      this.countries= countries;   
      this.countries.unshift(
        {
          name:'[Choose country]',
          code:''
        }
      );
      console.log(this.countries);   
    });
  }


  saveData(f: NgForm){
    if(f.invalid){
      // Extract all values from the form 'f'
      Object.values( f.controls).forEach(ctr=>{
        // Mark the field like touched
        ctr.markAsTouched();
      });
      return;
    }

    console.log("Data saved!!", f);
    console.log(f.value);
    
  }
}
