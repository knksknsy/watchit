import { ICredit } from './credit';
export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Array<ICollection>;
    budget: number;
    genres: Array<IGenre>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<IProductionCompany>;
    production_countries: Array<IProductionCountry>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<ISpokenLanguage>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credits?: ICredit;
}

export interface ICollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IProductionCompany {
    id: number;
    name: string;
}

export interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguage {
    iso_639_1: string;
    name: string;
}
