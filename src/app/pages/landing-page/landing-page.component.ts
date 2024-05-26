import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, map, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
// import { YService } from '../service/y.service';
import { ServiceDetailsService } from 'src/app/service-details.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  movies: Array<any> = [];
  image: any = '';
  trending_movie: Array<any> = [];
  searchKey = new FormControl();
  searchtext: string = '';
  // @Output() searchvalue=new EventEmitter<string>();
  searchvalue = '';
  search_movie: any;
  upcoming_movie: Array<any> = [];
  trailers: Array<any> = [];
  youtube_id: any;
  // movies:Array<any> = [];
  // Title:string | undefined;
  // Img_Path: String;

  constructor(
    private http: HttpClient,
    private servicedetails: ServiceDetailsService,
    private router: Router,
    public dialog: MatDialog,
    public sanitizer: DomSanitizer
  ) {}

  Base_url = 'https://api.themoviedb.org/3/';
  // Base_url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  Img_Path = 'https://image.tmdb.org/t/p/w500';
  // api_key = '214e0067db61ca62eb98c0e69c925b71';
  url =
    'https://api.themoviedb.org/3/movie/11?api_key=214e0067db61ca62eb98c0e69c925b71';

  trending_url = 'https://api.themoviedb.org/3/movie/top_rated';

  // url_search = 'https://api.themoviedb.org/3/search/movie?';
  docsignup$: Subject<void> = new Subject();
  upcoming = 'https://api.themoviedb.org/3/movie/upcoming';
  ngOnInit(): void {
    console.log('oninit called', this.Base_url);

    // this.http.get<any>(this.url).subscribe((res) => {
    this.http
      .get<any>(this.Base_url + `movie/top_rated`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlMDA2N2RiNjFjYTYyZWI5OGMwZTY5YzkyNWI3MSIsInN1YiI6IjYzZTc4YTdiYTJlNjAyMDA5MzI5OGNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kdURWUpA2wbh5BC2ew9TE8WS5mRVJwla0xLeLFijxvw'
          ),
      })
      .subscribe((res) => {
        this.movies = res.results;
        console.log(this.movies);

        this.image = this.Img_Path;

        // this.servicedetails.searchvalue.subscribe(res => {
        //   this.searchvalue = res;
        //   console.log("res is", res);
        // })

        // let results_array = movies.results;

        // for( let i=0; i<results_array.length; i++ ){
        //   console.log(results_array[i]);

        // }
      });

    //  this.http.get<any>(this.Base_url + `movie/top_rated`, {headers: new HttpHeaders().set('Content-Type','application/json').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlMDA2N2RiNjFjYTYyZWI5OGMwZTY5YzkyNWI3MSIsInN1YiI6IjYzZTc4YTdiYTJlNjAyMDA5MzI5OGNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kdURWUpA2wbh5BC2ew9TE8WS5mRVJwla0xLeLFijxvw')}).subscribe(res =>{

    //   let movies = res;
    //   console.log(movies);

    //   // console.log(this.movies);
    //   // console.log(movies.title);
    //   // var title = movies.title;
    //   // console.log(this.Img_Path + movies.poster_path);
    //   // console.log(title);

    // })

    // this.http.get<any>(this.trending_url).subscribe((data) => {

    this.http
      .get<any>(
        this.Base_url +
          `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        {
          headers: new HttpHeaders()
            .set('content-Type', 'application/json')
            .set(
              'Authorization',
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlMDA2N2RiNjFjYTYyZWI5OGMwZTY5YzkyNWI3MSIsInN1YiI6IjYzZTc4YTdiYTJlNjAyMDA5MzI5OGNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kdURWUpA2wbh5BC2ew9TE8WS5mRVJwla0xLeLFijxvw'
            ),
        }
      )
      .subscribe((results) => {
        console.log(results);
        this.trending_movie = results.results;
        console.log(this.trending_movie);
      });

    this.http
      .get<any>(this.Base_url + `movie/upcoming?language=en-US&page=1`, {
        headers: new HttpHeaders()
          .set('content-Type', 'application/json')
          .set(
            'Authorization',
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlMDA2N2RiNjFjYTYyZWI5OGMwZTY5YzkyNWI3MSIsInN1YiI6IjYzZTc4YTdiYTJlNjAyMDA5MzI5OGNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kdURWUpA2wbh5BC2ew9TE8WS5mRVJwla0xLeLFijxvw'
          ),
      })
      .subscribe((data) => {
        console.log(data);
        this.upcoming_movie = data.results;
      });

    this.http
      .get<any>('https://api.kinocheck.de/movies?tmdb_id=299534')
      .subscribe((resurt) => {
        console.log(resurt);
        this.trailers = resurt.videos;
        console.log(this.trailers);

        // this.youtube_id = this.trailers.youtube_video_id;
        // console.log(this.youtube_id);
      });

    // });

    // this.docsignup$.pipe(

    //   switchMap((event) => this.yservice.searchmoviename({query:this.searchText}).pipe(

    //   )),
    // )

    // this.http.get<any>(this.url_search + `query=` +  `fast x` + '&api_key=214e0067db61ca62eb98c0e69c925b71').subscribe(results => {
    //   console.log(results);
    // })
  }

  onchange(moviename: any) {
    // console.log(moviename); this return the whole search input element you can uncomment.
    console.log(moviename.value);
    this.search_movie = moviename.value;
    // this.servicedetails.searchdata.next(moviename.value);

    // this.router.navigate(['/search-results/', moviename.value])
    this.router.navigate(['/search-results'], {
      queryParams: { query: this.search_movie },
    });
  }
  purebutton() {
    console.log('stupid');
    this.router.navigate(['/search-results']);
  }

  backEnable(event: any) {
    this.searchvalue = event;
    console.log(this.searchvalue);
    // this.servicedetails.searchvalue.subscribe(searchdata => {
    //   // this.searchvalue = res;
    //   searchdata = this.searchvalue
    //   console.log("res is", searchdata);
    // })
    // console.log(this.searchvalue);
    // this.searchvalue.emit(event);
    // this.docsignup$.next(null);

    //   this.http.get<any>(this.url_search + `query=` +  this.searchText + '&api_key=214e0067db61ca62eb98c0e69c925b71').subscribe(results => {
    //   console.log(results);
    // })
  }
  // inputemit(){
  //   this.searchvalue.emit(this.searchText);
  //   console.log(this.searchText);
  // }

  openpopup(event: any) {
    console.log(event);
    let id = event;
    this.youtube_id = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + id
    );

    this.dialog.open(VideoDialogComponent, {
      data: this.youtube_id,
      width: '590px',
      height: '330px',
      panelClass: 'videodialog',
    });
  }
}
