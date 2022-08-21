export type TBtn = 'primary' | 'secondary';
export type TPage = 'cast' | 'episodes';

export interface TCast {
    character: TCharacter;
    person: TPerson;
    self: boolean;
    voice: boolean;
}

export interface TPerson {
    id: number;
    url: string;
    name: string;
    country: TCountry;
    birthday: string;
    deathday?: any;
    gender: TGender;
    image: any;
    updated: number;
    _links: any;
}

export type TGender = 'Female' | 'Male';

export interface TCharacter {
    id: number;
    url: string;
    name: string;
    image: any;
    _links: any;
}
export interface TCountry {
    name: string;
    code: string;
    timezone: string;
}

export interface Image {
    medium: string;
    original: string;
}

export interface TEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: Date;
    runtime: number;
    rating: any;
    image: Image;
    summary: string;
    _links: any;
}
