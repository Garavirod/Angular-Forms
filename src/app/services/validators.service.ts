import { Injectable } from '@angular/core';
import {FormControl}from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  // This is locked for data typed like 'rgarga'
  noData( control: FormControl): {[s:string]:boolean}{
    if(control.value?.toLowerCase()==='rgarga'){
      return {
        noData:true
      }
    }
    return null;
  }
}
