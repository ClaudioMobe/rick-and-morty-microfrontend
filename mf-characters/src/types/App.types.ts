type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
};

export type ApiResp = {
    info: {
        next: string|null;
        prev: string|null;
        pages: number 
    };
    results: Character[]
};