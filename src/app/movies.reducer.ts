import { createReducer, on } from '@ngrx/store';
import { getMovies, GetMoviesSuccess } from './movies.actions';
import { Movie } from './movie.interface';

export const initialState: Movie[] = [];

export const movieReducer = createReducer(
    initialState,
    on(GetMoviesSuccess, (state, { data: movies }) => {
        return [...movies]
    }),
);