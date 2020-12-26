import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss']
})
export class UtentiComponent implements OnInit {

  utenti : Observable<user[]>;
  nuovoUser: user;
  constructor(public firestore : AngularFirestore) { 

  }

  ngOnInit() {
    this.utenti = this.firestore.collection('user').snapshotChanges().pipe( map(actions => actions.map(a => {
      const data = a.payload.doc.data() as user;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))

    this.clearNewUser()
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

}
