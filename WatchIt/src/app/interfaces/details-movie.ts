export interface IDetailsMovie {
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
    production_companies: Array<IProductionCompanies>;
    production_countries: Array<IProductionCountries>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<any>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
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

export interface IProductionCompanies {
    id: number;
    name: string;
}

export interface IProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguages {
    iso_639_1: string;
    name: string;
}
