import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IClient } from '../iclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/api/v1/client";

  constructor(private httpClient: HttpClient) { }

  createClient(client: IClient) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,client);
  }
}
