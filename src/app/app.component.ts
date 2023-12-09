import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'final_sprint2';
  displayMenu:boolean=false;

  isLogin:boolean;
  isOrgLogin:boolean;

  ngOnInit(): void {
    this.isLogin = Boolean(window.localStorage.getItem('loggedIn'));
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
    this.displayMenu= (this.isLogin || this.isOrgLogin)
  }

  
}

