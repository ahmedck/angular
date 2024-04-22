import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IUser } from '../models/User';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    apiurl = 'http://localhost:8080/api/users';
    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.apiurl}`);
    }

    getUser(id: string): Observable<ApiResponse<IUser>> {
        return this.http.get<ApiResponse<IUser>>(`${this.apiurl}/${id}`);
    }

    createUser(employee: IUser): Observable<any> {
        return this.http.post(`${this.apiurl}`, employee);
    }

    updateUser(id: string, employee: IUser): Observable<any> {
        return this.http.put(`${this.apiurl}/${id}`, employee);
    }

    deleteUser(id: string): Observable<ApiResponse<any>> {
        return this.http.delete<ApiResponse<any>>(`${this.apiurl}/${id}`);
    }
}