import {Injectable} from '@angular/core';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  public resultado: any;

  constructor(private auth: AuthService) {
  }

  test() {
    debugger;
    if (this.auth.authenticated) {

    } else {

      this.auth.emailLogin("fullstackig@gmail.com", "1234567").then(user => {
        debugger;
        this.resultado = user
      })
    }
  }

  logOut() {
    this.auth.signOut()
  }
}
