import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from 'src/environments/environment';
import { CassaComponent } from './pages/cassa/cassa.component';
import { UtentiComponent, DialogContentCard } from './pages/utenti/utenti.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { CustomMaterialModule } from './core-module/mat-module.module';
import { CardDetailComponent } from './pages/utenti/card-detail/card-detail.component';
import { CardEditComponent } from './pages/utenti/card-edit/card-edit.component';
import { CalcolatoreComponent } from './components/calcolatore/calcolatore.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';


@NgModule({
  declarations: [
    AppComponent,
    CassaComponent,
    UtentiComponent,
    CardDetailComponent,
    DialogContentCard,
    CardEditComponent,
    CalcolatoreComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  entryComponents: [DialogContentCard],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
