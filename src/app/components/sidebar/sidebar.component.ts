import { Component } from '@angular/core';
import { SideBarOption } from './interfaces/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  title: string = 'Tiaca';
  sideBarOption: SideBarOption[] = [
    {
      label: 'Menú 1',
      icon: 'home',
      url: '#',
    },
    {
      label: 'Menú 2',
      icon: 'timeline',
      url: '#',
    },
    {
      label: 'Pagos',
      icon: 'input',
      url: 'payments',
    },
    {
      label: 'Menú 3',
      icon: 'check_box',
      url: '#',
    },
    {
      label: 'Bancos',
      icon: 'account_balance',
      url: '/banks',
    },
    {
      label: 'Perfil',
      icon: 'person_outline',
      url: 'profile',
    },
    {
      label: 'Menú 5',
      icon: 'settings',
      url: '#',
    },
    {
      label: 'Cerrar Sesión',
      icon: 'login',
      url: '/login',
    },
  ];
}
