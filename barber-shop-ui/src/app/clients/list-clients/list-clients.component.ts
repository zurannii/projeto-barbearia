import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token'; // Caminho corrigido
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { ClientTableComponent } from "../components/client-table/client-table.component";
import { ClientModelTable } from '../client.models';
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { I } from '@angular/cdk/a11y-module.d-7d03e079';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  imports: [ClientTableComponent],
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ],
})
export class ListClientsComponent implements OnInit, OnDestroy {

  private httpSubscriptions: Subscription [] = []


update(client: ClientModelTable) {
  this.router.navigate(['clients/edit-client', client.id])
}
delete(Client: ClientModelTable) {
  this.httpSubscriptions.push(this.httpServices.delete(Client.id).subscribe(_ => this.snackBarManager.show(`O cliente ${Client.name} foi excluído com sucesso`)))

}
clients: ClientModelTable[] = []

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpServices: ICLientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: ISnackbarManagerService,
    private readonly router: Router
  ) { }
  ngOnDestroy(): void {
    this.httpSubscriptions.forEach(s => s.unsubscribe())
  }
  ngOnInit(): void {
    this.httpSubscriptions.push(this.httpServices.list().subscribe(data => this.clients = data))
  }
}
