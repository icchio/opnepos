import { Component } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openpos';
  items: Observable<any[]>;
  telSrc ='';

  constructor(public firestore : AngularFirestore){
    // this.items = firestore.collection('user').snapshotChanges().pipe( map(actions => actions.map(a => {
    //   const data = a.payload.doc.data() as any;
    //   const id = a.payload.doc.id;
    //   return { id, ...data };
    // })))
  
    // this.firestore.collection('user').get().subscribe( p => {
    //   p.docs.forEach(k => {
    //     console.log(k.id)
    //   })
    // })
  }

  addItem() {
    const p = {
      Nome: 'Giovanni',
      Cognome: 'Cosi',
      Telefono: '1212121221'
    }
    this.firestore.collection('user').add(p);
  }

  moditem(id) {
   this.firestore.collection('user').doc(id).update({Nome:'GGGGG'}).then(r => {})
  }

  findItem(serch){
    this.items=this.firestore.collection('user', q => q.where('Telefono','>=',serch)).snapshotChanges().pipe( map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))
  }
}
