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
import { UtentiComponent, DialogContentCard, DialogUtenti } from './utenti/utenti.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { CustomMaterialModule } from './mat-module/mat-module.module';
import { CardDetailComponent } from './utenti/card-detail/card-detail.component';
import { CardEditComponent } from './utenti/card-edit/card-edit.component';
import { CalcolatoreComponent } from './calcolatore/calcolatore.component';
import { DettaglioUtentiComponent } from './utenti/dettaglio-utenti/dettaglio-utenti.component';


@NgModule({
  declarations: [
    AppComponent,
    CassaComponent,
    UtentiComponent,
    CardDetailComponent,
    DialogContentCard,
    DialogUtenti,
    CardEditComponent,
    CalcolatoreComponent,
    DettaglioUtentiComponent
  ],
  imports: [
    FontAwesomeModule,
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
  entryComponents: [DialogContentCard,DialogUtenti],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
