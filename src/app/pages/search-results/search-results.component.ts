import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ServiceDetailsService } from 'src/app/service-details.service';

import { ActivatedRoute, Route } from '@angular/router';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit{
  search_array:Array<any> = [];
  movie_array:Array<any> = []
  // getsearchvalue(event:any){
  //   this.searchText = event;
  //   console.log(this.searchText);
  // }
  

  url_search = 'https://api.themoviedb.org/3/search/movie?';
  Img_Path = 'https://image.tmdb.org/t/p/w500';
  searchtext: any;
  movie_count:any;
  movie_value:any;

  // servicedata = "";
  
  constructor(private http: HttpClient, private activated_route:ActivatedRoute){
    
    // this.detailservice.searchdata.subscribe(res=> {
    //   this.searchtext = res;
    //   console.log(this.searchtext);  // routing Parameter throw recieved or transfer the search data.

    //   this.http.get<any>(this.url_search + `query=` +  this.searchtext + '&api_key=214e0067db61ca62eb98c0e69c925b71').subscribe(res => {
    //     this.search_array = res.results;
    //     console.log(this.search_array);
    //   })
    // })
  }

  ngOnInit(): void {
    
      
 
    // this.searchtext = this.activated_route.snapshot.queryParams[''];
    this.activated_route.queryParams.subscribe(params => {
      this.searchtext = params['query'];
      // this.movie_array.push(this.searchtext.value); 
      console.log(this.movie_array);
      console.log(params);
      console.log(this.searchtext);
      
    })
    console.log(this.searchtext)  

    this.http.get<any>(this.url_search + `query=` +  this.searchtext + '&api_key=214e0067db61ca62eb98c0e69c925b71').subscribe(movies => {
      this.search_array = movies.results
      this.movie_count= this.search_array.length;
      console.log(this.movie_count);
      console.log(this.search_array);
    })

  }
  getsearchvalue(event:any){
    this.searchtext = event;
    console.log(this.searchtext);
  }

}
