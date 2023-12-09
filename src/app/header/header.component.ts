import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLogin:boolean=false;
  isOrgLogin:boolean=false;
constructor(private router:Router){}

  ngOnInit(): void {
    this.isLogin = Boolean(window.localStorage.getItem('loggedIn'));
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
  }

  submitLogout(){
    window.localStorage.removeItem('loggedIn');
    window.localStorage.removeItem('doID');
    this.isLogin = Boolean(window.localStorage.getItem('loggedIn'));
    this.router.navigateByUrl('')
    window.location.href = '';
  }
  orgLogout(){
    window.localStorage.removeItem('orgLoggedIn');
    window.localStorage.removeItem('orgID');
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
    this.router.navigateByUrl('')
    window.location.href = '';
   
  }
  
}
