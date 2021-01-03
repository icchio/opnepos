import { card, movimentiCard, user} from './../interfaces';
import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList, Inject } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Keyboard from "simple-keyboard";


export interface firebaseUser extends user {
  readonly id: string;
  showDett: boolean;
}
@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  value: string = '';
  keyboard: Keyboard;
  nuovoUser: user;

  subject: BehaviorSubject<firebaseUser[]> = new BehaviorSubject<any>([]);
  utenti : Observable<any> =  this.subject.asObservable();

  srcNome:string;
  srcCognome:string;
  srcTelefono:string;
  srcNumeroCarta:string;
  cardNumber: string;

  userIdOpen = '';
  keyboardHidden = true;

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
      let idopen = '';
      const data = a.payload.doc.data() as user;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))

    this.clearNewUser()
    
  }
  ngAfterViewInit(): void {
    this.keyboard = new Keyboard({
      onChange: input => {this.value = input},
      onKeyPress: button => this.onKeyPress(button)
    });
  }


  onKeyPress = (button: string) => {
    console.log("Button pressed", button);
    /**
     * If you want to handle the shift and caps lock buttons
     */
    //if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

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

  getDettaglio(u:firebaseUser) {
    //this.firestore.collection('user').doc(id).valueChanges().subscribe((r:user) =>{console.log(r)})
    //this.firestore.collection('user').doc(id).get().subscribe(r => {console.log(r.data())})
    if(u.id != this.userIdOpen){
      this.userIdOpen = u.id;
    } else {
      this.userIdOpen = '';
    }
    
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

  SaldoCarta(movimentiCard: movimentiCard[]){
    let sum = 0;
    movimentiCard.forEach(el => {
      sum = sum + el.Importo
    });
    return sum;
  }

  deleteCard(card: card, userCard: card[], id) {
    let arrcard = userCard.filter(k => { 
      return  k != card
    });
    if(window.confirm('Sicuro di voler eliminare questa carta?')){
      this.firestore.collection('user').doc(id).update({Carte: arrcard})
     }
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

  cardEdit(user: firebaseUser, card?:card){
    const dialogCard = this.dialog.open(DialogContentCard, {
      data: {
        User: user,
        Card: card
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

  addusr(){
    const dialogCard = this.dialog.open(DialogUtenti, {
      data: {}
    });
    this.keyboardHidden = false;
  }

}
// <app-card-detail *ngIf="data.Card" [card]="data.Card" style="width: 400px;"></app-card-detail>
@Component({
  selector: 'dialog-card-content',
  template: `<app-card-edit *ngIf="data.User" [user]="data.User" [card]="data.Card"></app-card-edit>`,
})
export class DialogContentCard {
  /**
   *
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'dialog-card-content',
  template: `<app-dettaglio-utenti></app-dettaglio-utenti>`,
})
export class DialogUtenti{
  /**
   *
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

