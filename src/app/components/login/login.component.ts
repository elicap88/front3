import { Component, forwardRef } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public continue = false;
  public email = '';
  public password = '';
  public dato: string | null = '';
  public title: string = 'Tiaca';

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  continueToPass() {
    if (this.email != '') {
      this.continue = true;
    }
  }

  back() {
    this.continue = false;
  }

  grabarLocalStorage(data: any) {
    localStorage.setItem('persona', JSON.stringify(data));
  }

  obtenerLocalstorage() {
    let persona = JSON.parse(localStorage.getItem('persona') || '{}');
    console.log('persona', persona);
  }

  login() {
    this.obtenerLocalstorage();
    const params = {
      username: this.email,
      password: this,
    };

    return this.loginService.login(params).subscribe((res) => {
      console.log('res', res);
      if (res) {
        this.grabarLocalStorage(res);
      }
      // this.address = res;
    });
  }
}
