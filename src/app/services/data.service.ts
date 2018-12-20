import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Object } from '../object';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private baseUrl = 'http://localhost:9000/'

    constructor(private httpClient: HttpClient) { }

    getListData(path): Observable<Object[]> {
        return this.httpClient.get<Object[]>(this.baseUrl + path);
    }

    getData(path, id): Observable<Object> {
        return this.httpClient.get<Object>(this.baseUrl + path + "/" + id);
    }

    addData(path, data): Observable<Object> {
        return this.httpClient.post<Object>(this.baseUrl + path, data);
    }
}
