import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  title = 'Mi perfil';
  information = 'Información general';
  phone = 'Celular';
  email = 'Correo electrónico';
  password = 'Contraseña';
  auth = 'Autenticación de dos factores';

  public areaCode: string = '';
  public celphone: string = '';
  public person: any;

  constructor() {}

  ngOnInit() {
    this.obtenerLocalstorage();
  }

  obtenerLocalstorage() {
    this.person = JSON.parse(localStorage.getItem('persona') || '{}');
    console.log('persona', this.person);
  }
}
