import { card, movimentiCard } from './../interfaces';
import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList, Inject } from '@angular/core';
import { user } from '../interfaces'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as firebase from 'firebase';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';



export interface firebaseUser extends user {
  readonly id: string;
}
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  nuovoUser: user;

  subject: BehaviorSubject<firebaseUser[]> = new BehaviorSubject<any>([]);
  utenti : Observable<any> =  this.subject.asObservable();

  srcNome:string;
  srcCognome:string;
  srcTelefono:string;
  srcNumeroCarta:string;
  cardNumber: string;


  srcObj: user;
  rowcount = 0;
  constructor(
    public firestore : AngularFirestore,
    public http: HttpClient,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.srcObj = {
      Nome: '',
      Cognome: '',
      Telefono: '',
      Carte: [],
    }

    this.utenti = this.firestore.collection('user').snapshotChanges().pipe( map(actions => actions.map(a => {
      const data = a.payload.doc.data() as user;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))

    this.clearNewUser()
  }

  keysrcuser(ev){
    console.log(ev)
  }

  cercaUtente(ncard){
    console.log('qui')
    if(ncard != ""){
      this.utenti = this.firestore.collection('user',
      q => q
      .where('Carte','array-contains',ncard)).snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
    } else {
      this.utenti = this.firestore.collection('user').snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      })))
    }



    // this.utenti=this.firestore.collection(
    //     'user',
    //     q => q
    //     .where('Telefono','>=',this.srcObj.Telefono)
    //     .where('Telefono', '<', this.srcObj.Telefono + 'z')
    //   ).snapshotChanges().pipe( map(actions => actions.map(a => {
    //   const data = a.payload.doc.data() as any;
    //   const id = a.payload.doc.id;
    //   return { id, ...data };
    // })))
  }

  getDettaglio(id: string) {
    //this.firestore.collection('user').doc(id).valueChanges().subscribe((r:user) =>{console.log(r)})
    this.firestore.collection('user').doc(id).get().subscribe(r => {console.log(r.data())})
  }

  clearNewUser(){
    this.nuovoUser = {
      Nome: '',
      Cognome: '',
      Telefono: '',
      Carte:[]
    }
  }

  aggiungi(){
    this.firestore.collection('user').add(this.nuovoUser);
  }

  // aggiungiCard(id: string) {
  //   const nuovaCard = { IdCard: this.cardNumber, Movimenti: [] };
  //   this.firestore.collection('user').doc(id).update({ Carte: firebase.firestore.FieldValue.arrayUnion(nuovaCard) });
  // }



  apriCard(card: card, isNuovo: boolean) {
    const dialogCard = this.dialog.open(DialogContentCard, {
      data: {
        Card: card
      }
    });
  }

  nuovaCard(user: firebaseUser){
    const dialogCard = this.dialog.open(DialogContentCard, {
      data: {
        User: user
      }
    });
  }

  elimina(id){
    this.firestore.collection('user').doc(id).delete().then(() => {})
  }

  caricaUtenitDummy(){
    this.http.get('assets/utentiDummy.json').subscribe((r:user[]) => {
      this.clearNewUser()
      r.forEach(el => {
        this.nuovoUser.Nome = el.Nome
        this.nuovoUser.Cognome = el.Cognome
        this.nuovoUser.Telefono = el.Telefono
        this.nuovoUser.Carte = [];
        el.Carte.forEach(c => {
          this.nuovoUser.Carte.push(c)
        });
        this.aggiungi();
      });
    })
  }

  setCercaCard(){
    setTimeout(()=>{
      // this will make the execution after the above boolean has changed
      document.getElementById('inputCard').focus();
    },0);
  }

}

@Component({
  selector: 'dialog-card-content',
  template: `
    <app-card-edit *ngIf="data.User" [user]="data.User"></app-card-edit>
    <app-card-detail *ngIf="data.Card" [card]="data.Card" style="width: 400px;"></app-card-detail>
`,
})
export class DialogContentCard {
  /**
   *
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: card) {}
}
