import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from 'src/app/Types/Movie';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | undefined;
  movieId = this.route.snapshot.params["id"];
  
  constructor(private movieService: MovieService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.movieService.getMovie(`/${this.movieId}`).subscribe(movie=>{
      this.movie = movie;
      
    })
  }

  deleteHandler():void{

  }
}
