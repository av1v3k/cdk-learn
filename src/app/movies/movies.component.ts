import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../movie.interface';
import { getMovies } from '../movies.actions';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private store: Store<{movies: Movie[]}>) { 
    this.movies$ = this.store.select('movies');
  }

  ngOnInit(): void {
    this.store.dispatch(getMovies());
  }

}
