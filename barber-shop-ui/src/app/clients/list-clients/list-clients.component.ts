import { Component, Inject } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token'; // Caminho corrigido
import { ICLientService } from '../../services/api-client/clients/iclients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService } // Uso correto do InjectionToken
  ]
})
export class ListClientsComponent {
  constructor(@Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpServices: ICLientService) {
  }
}
