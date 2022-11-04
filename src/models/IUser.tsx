export interface IUser {
    firstName:    string;
    lastName:     string;
    email:        string;
    password:     string;
    enabled:      boolean;
    tokenExpired: boolean;
    roles:        Role[];
}

export interface Role {
    id:   number;
    name: string;
}
