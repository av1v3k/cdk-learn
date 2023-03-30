import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MoviesService } from './movies.service';
import { getMovies, GetMoviesSuccess } from './movies.actions';

@Injectable()
export class MoviesEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(getMovies),
        exhaustMap(() => this.moviesService.getAll().pipe(
            map((movies) => GetMoviesSuccess({data: movies})),
            catchError(() => EMPTY)
        ))

    ))

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) { }
}