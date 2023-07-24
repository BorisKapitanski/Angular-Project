import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Types/Movie';
import { NoMoviesComponent } from 'src/app/shared/no-movies/no-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] | undefined = undefined;
  noMovies = true;
  isLoading = true;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies
      this.isLoading = false;
      if (this.movies) {
        this.noMovies = false;
      }
    });
  }
}
