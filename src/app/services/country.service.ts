import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/lang/es').pipe(
      // map angular extension
      map((resp: any[])=>{
        // we use map of array's properties here
        return resp.map(c=>{
            return {
              country:c.name,
              code:c.alpha3Code
            }// obj returned
        })//map array
      })//map Angular
    )
  }
}
