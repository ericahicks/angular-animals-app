import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Dog } from './models/dog';

import { catchError, Observable, of, throwError } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  http: HttpClient
  dogURL = environment.apiURL;

  constructor(http: HttpClient) {
    this.http = http;
   }

   getDogs(breed: string): Observable<Dog[]>  {
    if (!breed) {
      return this.http.get<Dog[]>(this.dogURL);
    } else {
      console.log(breed);
      return this.http.get<Dog[]>(this.dogURL + "breed/" + breed);
    }
  }
  }
