import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  redirectUrl: string;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate([this.redirectUrl ? this.redirectUrl : 'cassa']);
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string, url: string) {
    this.redirectUrl = url;
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['auth/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['accesso/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  async loginWithGoogle() {
    await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    this.router.navigate(['cassa']);
  }

  async loginWithPhone(phone: string, recaptcha: firebase.auth.RecaptchaVerifier) {
    await this.afAuth.auth.signInWithPhoneNumber(phone, recaptcha).then(confirmationResult => {
      confirmationResult.confirm(prompt("codice....")).then(function (result) {
        this.router.navigate(['cassa']);
        console.log(result.user);
      }).catch(function (error) {
        console.log(error)
      });
      return confirmationResult
    })
      .catch(function (error) {
        console.error("SMS not sent", error);
      });
  }

}
