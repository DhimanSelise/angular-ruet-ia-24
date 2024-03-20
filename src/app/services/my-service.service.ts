import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private myHttp: HttpClient
  ) { }

  add(num1: number,num2: number): number{
    return num1+num2;
  }

  getUpcomingMovies(): Observable<any> {
    const apiUrl ='https://api.themoviedb.org/3/movie/upcoming?api_key=a54d7a09afeebfe772e8d685c01b2422';
    return this.myHttp.get<any>(apiUrl);
  }
}
