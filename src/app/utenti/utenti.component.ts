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
  inputName = "Nome";



  subject: BehaviorSubject<firebaseUser[]> = new BehaviorSubject<any>([]);
  utenti : Observable<any> =  this.subject.asObservable();

  srcNome:string;
  srcCognome:string;
  srcTelefono:string;
  srcNumeroCarta:string;
  cardNumber: string;

  userIdOpen = '';
  newUserRow = false;
  keyboardHidden = true;

  newUsr: user;
  rowcount = 0;
  constructor(
    public firestore : AngularFirestore,
    public http: HttpClient,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.newUsr = {
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
      debug: true,
      inputName: this.inputName,
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      preventMouseDownDefault: true // If you want to keep focus on input
    });

    /**
     * Since we have default values for our inputs,
     * we must sync them with simple-keyboard
     */
    //this.keyboard.replaceInput(this.newUsr);
  }


  onInputFocus = (event: any) => {
    this.inputName = event.target.id;

    console.log("Focused input", this.inputName);

    this.keyboard.setOptions({
      inputName: event.target.id
    });
  };

  setInputCaretPosition = (elem: any, pos: number) => {
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    }
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value, event.target.id);
  };

  onChange = (input: string) => {
    this.newUsr[this.inputName] = input;
    console.log("Input changed", input);

    /**
     * Synchronizing input caret position
     * This part is optional and only relevant if using the option "preventMouseDownDefault: true"
     */
    let caretPosition = this.keyboard.caretPosition;

    if (caretPosition !== null)
      this.setInputCaretPosition(
        document.querySelector(`#${this.inputName}`),
        caretPosition
      );

    console.log("caretPosition", caretPosition);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  keysrcuser(ev){
    console.log(ev)
  }

  cercaUtente(ncard){
    console.log('qui')
    if(ncard != ""){

    } else {
      
    }

 
  }

  getDettaglio(u:firebaseUser) {
    if(u.id != this.userIdOpen){
      this.userIdOpen = u.id;
    } else {
      this.userIdOpen = '';
    }
    
  }

  clearNewUser(){
    this.newUsr = {
      Nome: '',
      Cognome: '',
      Telefono: '',
      Carte:[]
    }
  }

  aggiungiUtente(){
    this.firestore.collection('user').add(this.newUsr);
    this.closeNew();
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


  setCercaCard(){
    setTimeout(()=>{
      // this will make the execution after the above boolean has changed
      document.getElementById('inputCard').focus();
    },0);
  }

  addusr(){
   this.newUsr = {
     Carte: [],
     Nome: '',
     Cognome: '',
     Telefono: ''
   }
   this.newUserRow = true;
   this.keyboardHidden = false;
  }

  closeNew(){
    this.newUsr = {
      Carte: [],
      Nome: '',
      Cognome: '',
      Telefono: ''
    }
    this.newUserRow = false;
    this.keyboardHidden = true;
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

