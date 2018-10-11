import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, 
    private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('auth')) {
      this._router.navigate(['/home']);
    }
  }

  login () {
    this._authService.activeDLogin();
  }
}
