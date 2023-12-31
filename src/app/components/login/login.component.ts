import { Component, forwardRef } from '@angular/core';
import { LoginService } from './services/login.service';

import { Router } from '@angular/router';

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

  constructor(private loginService: LoginService, private router: Router) {}

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

  login() {
    const params = {
      username: this.email,
      password: this.password,
    };

    return this.loginService.login(params).subscribe((res) => {
      if (res) {
        this.grabarLocalStorage(res);
        this.router.navigate(['/home/payments']);
      }
      // this.address = res;
    });
  }
}
