export interface IJwt {
    status: boolean;
    jwt:    string;
    result: Result;
}

export interface Result {
    password:              string;
    username:              string;
    authorities:           Authority[];
    accountNonExpired:     boolean;
    accountNonLocked:      boolean;
    credentialsNonExpired: boolean;
    enabled:               boolean;
}

export interface Authority {
    authority: string;
}