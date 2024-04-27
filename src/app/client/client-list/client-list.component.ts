import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { IClientList } from '../iclientList';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: IClientList[] | undefined;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.clientService.getClient().subscribe(
      (res: any) => {
        this.clients = res as IClientList[];
      },
      (error) => {
        // Trate o erro aqui, se necessário
        console.error('Erro ao buscar clientes:', error);
      }
          );


  }

}
