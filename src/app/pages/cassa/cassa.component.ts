import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { listino, movimentiCard, user } from '../../interfaces/interfaces'
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { CalcService } from '../../components/calcolatore/calc.service'
import { firebaseUser } from '../utenti/utenti.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.scss']
})
export class CassaComponent implements OnInit, OnDestroy {

  displayText = '0,00';
  calcVal = 0.00;


  subject: BehaviorSubject<listino[]> = new BehaviorSubject<any>([]);
  importi : Observable<any> =  this.subject.asObservable();

  subjectListino: BehaviorSubject<listino[]> = new BehaviorSubject<any>([]);
  listino : Observable<any> =  this.subjectListino.asObservable();

  subjectUsr: BehaviorSubject<firebaseUser[]> = new BehaviorSubject<any>([]);
  utenti : Observable<any> =  this.subjectUsr.asObservable();

  falgmulti = false;
  valmulti = 0;

  totItem = 0;

  cardSrc ='';
  userSelected: firebaseUser;
  userSelectedSaldo = 0;
  usercardNo = '';
  private cardInputFocusInterval : any;

  constructor(
    public firestore : AngularFirestore,
    public http: HttpClient,
    public calcServ : CalcService
    ) {
    this.importi.subscribe(k =>
     {
       this.calcVal = 0;
       this.totItem = 0;
       k.forEach((obj : listino) => {
         this.totItem ++;
         this.calcVal = this.calcVal + obj.importo;
       });
     })
  }
  ngOnDestroy(): void {
    clearInterval(this.cardInputFocusInterval);
  }

  ngOnInit() {
    this.cardInputFocusInterval = setInterval(() => {
      document.getElementById('txtcardinput').focus();
    },500)

    this.listino = this.firestore.collection('listino').snapshotChanges().pipe( map(actions => actions.map(a => {
      const data = a.payload.doc.data() as listino;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))
  }


  sum(ev,tag){
      this.addToSumArray(ev,tag)
  }

  cercaUtente(srcNumeroCarta){
    if(srcNumeroCarta != ""){
      this.firestore.collection('user').get().subscribe(p => {
        p.docs.forEach(u => {
          let thisu = {id:u.id, ...u.data()} as firebaseUser
          let card = thisu.Carte.find(p => p.IdCard == srcNumeroCarta)
          if(card){
            this.userSelected = thisu
            this.usercardNo = srcNumeroCarta;
            this.userSelectedSaldo = 0;
            card.Movimenti.forEach((el:movimentiCard) => {
              this.userSelectedSaldo = this.userSelectedSaldo + el.Importo;
            });
            document.getElementById('txtcardinput').focus();
            this.cardSrc = '';
            return;
          }
        })
      })
    }

  }



  sumPreset(importo, tag){
    if(typeof importo  == 'string'){
      importo = Number(importo.replace(',','.'))
    }
    this.addToSumArray(importo,tag)
    this.calcServ.resetCalc();
    //this.displayText = "0,00";
    //this.unitCount=0;
  }

  addToSumArray(toadd,tag?){
    if(tag == null){
      tag = '';
    }

    this.importi.pipe(take(1)).subscribe(val => {
      var obj: listino = {importo: toadd, tag: tag, descrizione:''}
      const newArr = [...val, obj];
      this.subject.next(newArr);
    })
  }

  remove(item:listino){
    this.importi.pipe(take(1)).subscribe(val => {
      let thisarray = val.filter( k => {
        return  k != item
      });
      const newArr = [...thisarray];
      this.subject.next(newArr);
    })
  }

  addebita(){
    let Movimento: movimentiCard = { Data : firebase.firestore.Timestamp.fromDate(new Date()),Importo:this.calcVal*-1}
    this.userSelected.Carte.find(p => p.IdCard == this.usercardNo).Movimenti.push(Movimento)
    this.firestore.collection('user').doc(this.userSelected.id).update({Carte : this.userSelected.Carte});
    this.userSelected = null;
    this.userSelectedSaldo = 0;
    this.usercardNo = '';
    this.importi.pipe(take(1)).subscribe(val => {
      let newArr =  []
      this.subject.next(newArr);
    })
    this.calcServ.resetCalc()
  }

}
