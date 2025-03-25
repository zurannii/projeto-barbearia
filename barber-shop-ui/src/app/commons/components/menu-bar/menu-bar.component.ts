import { Component } from '@angular/core';
import { MatMenuModule, MatMenuPanel } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule], 
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor(private readonly router: Router) {}
ClientMenu: MatMenuPanel<any> | null | undefined;

navigateTo(path: string) {
  this.router.navigate([path])
}
}