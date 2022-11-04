export interface IOrders {
    status: boolean;
    result: OrderList[];
}

export interface OrderList {
    oid:           number;
    pid:           number;
    firstName:     string;
    lastName:      string;
    email:         string;
    productTitle:  string;
    description:   string;
    price:         number;
    categoryTitle: string;
    file:          string;
}
