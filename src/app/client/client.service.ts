import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClient } from './iclient';
import { Observable, observable } from 'rxjs';
import { IClientList } from './iclientList';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8080/api/v1/client";

  constructor(private httpClient: HttpClient) { }

  createClient(client: IClient) : Observable<Object>{
    console.log("service",client)
    const client1 =this.httpClient.post(`${this.baseURL}`,client);
    console.log("service depois post",client1)
    return client1
  }

  getClient(): Observable<IClientList[]> {
    return  this.httpClient.get<IClientList[]>(`${this.baseURL}`)

  }
}
