import { createAction, props } from '@ngrx/store';
import { Movie } from './movie.interface';


export const getMovies = createAction('[Movies Component] Get Movies');
export const GetMoviesSuccess = createAction(
    '[Movies Component] Get Movies Success',
    props<{data: Movie[]}>()
);