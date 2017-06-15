export interface ICredit {
    id?: number;
    cast: Array<ICast>;
    crew: Array<ICrew>;
}

export interface ICast {
    cast_id: number;
    character: string;
    credit_id: string;
    id: number;
    name: string;
    order: number;
    profile_path: null | string;
}

export interface ICrew {
    credit_id: number;
    department: string;
    id: number;
    job: string;
    name: string;
    profile_path: null | string;
}
