import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from './client/iclient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/api/v1/client";

  constructor(private httpClient: HttpClient) { }

  createClient(client: IClient) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,client);
  }

  getClient(){
    return this.httpClient.get(`${this.baseURL}`)
  }
}
