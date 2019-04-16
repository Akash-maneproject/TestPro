import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    configURL = "http://localhost:4200";

    getAll() {
        return this.http.get<User[]>(`${this.configURL}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.configURL}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${this.configURL}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.configURL}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.configURL}/users/${id}`);
    }
}