import { Component, OnInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { user } from '../interfaces'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';



export interface firebaseUser extends user {
  readonly id;
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



  srcObj: user;
  rowcount = 0;
  constructor(
    public firestore : AngularFirestore,
    public http: HttpClient) {
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
    this.firestore.collection('user').doc(id).valueChanges().subscribe((r:user) =>{console.log(r)})
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
