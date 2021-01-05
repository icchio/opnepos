import { Component, OnInit } from  '@angular/core';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { AuthService } from  '../../auth/auth.service';
import { auth } from  'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = ''
  public password = ''
  public phone = ''


  public user : User;

  recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  constructor(private  authService:  AuthService) { }
    ngOnInit() {
      if(this.authService.isLoggedIn != null){
        console.log(this.authService.isLoggedIn)
        this.user = JSON.parse(localStorage.getItem('user')) as User;
      } 
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    }

  login(){
    this.authService.login(this.email, this.password).then(p => {
      console.log(p)
    }).catch(e => console.log(e))
  }

  loginGoogle(){
    this.authService.loginWithGoogle().then(p => {
      console.log(p)
    }).catch(e => console.log(e))
  }

  loginPhone(){
    this.authService.loginWithPhone(this.phone,this.recaptchaVerifier).then()
  }
}
