import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  public resultado : any
  constructor(private auth: AuthService, private afdb: AngularFireDatabase) { }
  
  test() {
    debugger
    if (this.auth.authenticated) {
    
    }else{

      this.auth.emailLogin("fullstackig@gmail.com","1234567").then(user=>{
        debugger
        this.resultado = user})
    }
  }

  logOut(){
    this.auth.signOut()
      }
}
