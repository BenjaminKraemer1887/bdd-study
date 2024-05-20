import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPrepService {
  validCredentials = {
    email: 'testiMcTestface@email.com',
    password: '123',
  };

  constructor() {}

  loginByEmail(email: string, password: string) {
    return (
      email === this.validCredentials.email &&
      password === this.validCredentials.password
    );
  }
}
