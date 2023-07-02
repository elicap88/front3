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
}
