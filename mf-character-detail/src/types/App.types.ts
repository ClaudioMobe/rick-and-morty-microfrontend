export type Episode = {
    id: number;
    name: string;
    episode: string
};

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: string[];
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
};
