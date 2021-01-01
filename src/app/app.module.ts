import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CassaComponent } from './cassa/cassa.component';
import { UtentiComponent, DialogContentCard } from './utenti/utenti.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CustomMaterialModule} from './mat-module/mat-module.module';
import { CardDetailComponent } from './utenti/card-detail/card-detail.component';
import { CardEditComponent } from './utenti/card-edit/card-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CassaComponent,
    UtentiComponent,
    CardDetailComponent,
    DialogContentCard,
    CardEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
export class AppModule { }
