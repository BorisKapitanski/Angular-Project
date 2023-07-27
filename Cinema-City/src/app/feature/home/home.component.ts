import { Component, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { Movie } from 'src/app/Types/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] | undefined = undefined;
  noMovies = true;
  isLoading = true;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieWithLimit(5).subscribe((movies) => {
      this.movies = movies.slice(-5).reverse();
      this.isLoading = false;
      if (this.movies) {
        this.noMovies = false;
      }
    });
  }

  // getMovies() {
  //   return this.http.get<Movie[]>(environment.apiUrl + "/movies").subscribe(movies => {
  //     this.movies = movies.sort((a: Movie, b: Movie) => a.created_at.localeCompare(b.created_at)).slice(5);
  //     this.isLoading = false;
  //     if (!this.movies) {
  //       this.noMovies = false;
  //     }
  //     console.log(this.movies)
  //   })
// }


}
