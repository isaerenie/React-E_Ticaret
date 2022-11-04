export interface ICategory {
    status: boolean;
    result: Result[];
}

export interface Result {
    cid:           number;
    categoryTitle: string;
}
