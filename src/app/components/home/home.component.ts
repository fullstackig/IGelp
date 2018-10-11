import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: any;

  constructor() { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('auth'));
    this.profile = data;
    console.log(data);
  }

}
