// filepath: c:\Users\zuran\projeto-barbearia-angular\projeto-barbearia\barber-shop-ui\src\app\clients\components\client-table\client-table.component.ts
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataSource } from '@angular/cdk/collections';
import { ClientModelTable } from '../../client.models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-table',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent {
  
  @Input() clients: ClientModelTable[] = []

  dataSource!: MatTableDataSource<ClientModelTable>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions']

  private dialogManagerServiceSubscriptions?: Subscription

  @Output() onConfirmDelete = new EventEmitter<ClientModelTable>()

  @Output() onRequestUpdate = new EventEmitter<ClientModelTable>()
  


  formatPhone(phone: string): string {
    
    return phone;
  }

  delete(client: any): void {
    console.log('Excluir cliente:', client);
  }

  update(client: any): void {
    console.log('Atualizar cliente:', client);
  }
}