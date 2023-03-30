import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from './movie.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAll(): Observable<Movie[]> {
    return of([
      { name: 'Hulk' },
      { name: 'Ayan' },
    ]);
  }
}
