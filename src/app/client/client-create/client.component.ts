import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../client.service';
import { IClient } from '../iclient';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  formClient = this.fb.group({
    name:["", [
      Validators.required,
      Validators.nullValidator
    ]],
    cpf:["", [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern('^[0-9]*$')
    ]],
    email:["", [
      Validators.required,
      Validators.email
    ]],
  })

  constructor(private clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  clientResponse: any;


  onSubmit(): void {
    if (this.formClient.valid) {
      const form = this.formClient.value;
      const client =  {
        name : form.name,
        cpf: form.cpf,
        email: form.email

      } as IClient

      this.clientService.createClient(client).subscribe(
        (response)=> {
          console.log('Cliente criado com sucesso:', response);
          this.clientResponse = response;
        this.formClient.reset();
        }
      );

    } else {
      // Handle form errors

      console.log('Formulário inválido', this.formClient.errors);
    }
  }


}
