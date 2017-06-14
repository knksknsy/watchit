import { IMovieDetails } from './movie-details';

export interface IMovieList {
    id: number,
    name: string,
    items: number,
    movies?: Array<IMovieDetails>
}