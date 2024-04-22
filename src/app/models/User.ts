export interface ApiResponse<T> {
    message?: string;
    data: T;
}

export interface IUser {
    _id?: string;
    email: string;
    role: string;
    password: string;
}