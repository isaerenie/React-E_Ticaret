export interface IProductImage {
    status: boolean;
    images: Image[];
}

export interface Image {
    iid:  number;
    pid:  number;
    file: string;
}
