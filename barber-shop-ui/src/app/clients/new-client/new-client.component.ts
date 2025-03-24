import { Component, Inject, OnDestroy } from '@angular/core';
import { ClientModelForm } from '../client.models';
import { ICLientService } from '../../services/api-client/clients/iclients.service';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; 
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { ISnackbarManagerService } from '../../services/isnackbar-manager.service'; 
import { ClientFormComponent } from '../components/client-form/client-form.component';

@Component({
  selector: 'app-new-client',
  imports: [ClientFormComponent],
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css'],
  providers: [
    { provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService },
    { provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService }
  ]
})
export class NewClientComponent implements OnDestroy {
  private httpSubscription?: Subscription;
  
  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpServices: ICLientService,
    @Inject(SERVICES_TOKEN.SNACKBAR) private readonly snackBarManager: ISnackbarManagerService, 
    private readonly router: Router 
  ) {}

  ngOnDestroy(): void {
    if (this.httpSubscription) {
      this.httpSubscription.unsubscribe();
    }
  }

  onSubmitClient(value: ClientModelForm): void {
    console.log(value)
    const { id, ...request } = value;
    this.httpServices.save(request).subscribe(() => {
      this.snackBarManager.show('Usuário cadastrado com sucesso!');
      this.router.navigate(['clients/list']);
    });
  }
}