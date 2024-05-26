import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class YService {
  movies:Array<any> = [];
  url = 'https://api.themoviedb.org/3/search/movie?';

  constructor(private http:HttpClient) { }

  searchmoviename(params: {query:any}){
    this.http.get<any>(this.url + `query=` +  params + '&api_key=214e0067db61ca62eb98c0e69c925b71')
  }
}


