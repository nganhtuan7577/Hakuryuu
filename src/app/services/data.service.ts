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

    getListData(database): Observable<Object[]> {
        return this.httpClient.get<Object[]>(this.baseUrl + database);
    }

    getData(database, id): Observable<Object> {
        return this.httpClient.get<Object>(this.baseUrl + database + "/" + id);
    }
}
