export interface IProductss {
    status: boolean;
    result: ProBilgiler[];
}

export interface ProBilgiler {
    pid:           number;
    price:         number;
    productTitle:  string;
    categoryTitle: string;
    description:   string;
    onSale:        boolean;
    file:          string;
}
 