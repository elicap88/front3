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
      icon: '#',
      url: '#',
    },
    {
      label: 'Menú 2',
      icon: '#',
      url: '#',
    },
    {
      label: 'Pagos',
      icon: '#',
      url: 'payments',
    },
    {
      label: 'Menú 3',
      icon: '#',
      url: '#',
    },
    {
      label: 'Bancos',
      icon: '#',
      url: '/banks',
    },
    {
      label: 'Perfil',
      icon: '#',
      url: 'profile',
    },
    {
      label: 'Menú 5',
      icon: '#',
      url: '#',
    },
    {
      label: 'Logout',
      icon: '#',
      url: '/login',
    },
  ];
}
