export interface LoginForm {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
}

export interface UserToken {
    accessToken: string;
    user: User
}