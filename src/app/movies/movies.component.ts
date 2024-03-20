import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  myMovies: any[] = [];
  constructor(
    private myService: MyServiceService
  ) { }

  ngOnInit(): void {
    console.log(this.myService.add(2,5));

    this.myService.getUpcomingMovies().subscribe(res=>{
      if(res) {
        this.myMovies = res.results;
      }
      console.log(res);
    })

    
  }

  getImageUrl (backdropPath: string): string {
    return 'https://image.tmdb.org/t/p/w342'+backdropPath; 
  }



}
