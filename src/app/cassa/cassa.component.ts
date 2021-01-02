import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { listino } from '../interfaces'
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.scss']
})
export class CassaComponent implements OnInit {

  displayText = '0,00';
  calcVal = 0.00;
  
  unitCount = 0;
  subject: BehaviorSubject<listino[]> = new BehaviorSubject<any>([]);
  importi : Observable<any> =  this.subject.asObservable();

  subjectListino: BehaviorSubject<listino[]> = new BehaviorSubject<any>([]);
  listino : Observable<any> =  this.subjectListino.asObservable();

  falgmulti = false;
  valmulti = 0;

  totItem = 0;

  constructor(  
    public firestore : AngularFirestore,
    public http: HttpClient
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

  ngOnInit() {
    this.listino = this.firestore.collection('listino').snapshotChanges().pipe( map(actions => actions.map(a => {
      const data = a.payload.doc.data() as listino;
      const id = a.payload.doc.id;
      return { id, ...data };
    })))
  }

  clickNum(n){
    if(this.falgmulti== true){
      if(this.unitCount==0){
        this.displayText = n
      } else{
        this.displayText = this.displayText.toString() + n;
      }
      this.unitCount = this.unitCount+1; 
      return
    }

    this.displayText =this.displayText.replace(',','');
    if(this.unitCount == 0){
      this.displayText= '00' + n
    }
    if(this.unitCount == 1){
      this.displayText= '0' + this.displayText.substring(this.displayText.length-1,this.displayText.length) + n
    }
    if(this.unitCount > 1){
      if(this.displayText.substring(0,1) == '0'){
        this.displayText = this.displayText.substring(1,this.displayText.length)
      }
      this.displayText = this.displayText + n;
    }
    this.unitCount = this.unitCount+1;  
    this.displayText = this.displayText.substring(0,this.displayText.length -2) +','+this.displayText.substring(this.displayText.length -2,this.displayText.length);
    //this.calcVal=  Number(this.displayText.replace(',','.'))
  }

  canc(){
    if(this.unitCount <= 0){
      return;
    }
    if(this.falgmulti== true){
      if(this.unitCount==1){
        this.displayText = '0';
        this.unitCount = this.unitCount-1; 
        return;
      }
      this.displayText = this.displayText.substring(0,this.displayText.length - 1)
      this.unitCount = this.unitCount-1; 
      return
    }

    this.displayText =this.displayText.replace(',','');
    this.unitCount = this.unitCount-1;
    if(this.unitCount == 0){
      this.displayText = '0' + this.displayText.substring(0,this.displayText.length - 1)
    }
    if(this.unitCount == 1){
      this.displayText = '0' + this.displayText.substring(0,this.displayText.length - 1)
    }
    if(this.unitCount == 2){
      this.displayText = '0' + this.displayText.substring(0,this.displayText.length - 1)
    }
    if(this.unitCount > 2){
    this.displayText = this.displayText.substring(0,this.displayText.length - 1)
    }
    this.displayText = this.displayText.substring(0,this.displayText.length -2) +','+this.displayText.substring(this.displayText.length -2,this.displayText.length);
    //this.calcVal=  Number(this.displayText.replace(',','.'))
  }

  sum(tag){
    if(this.falgmulti==true){
      this.addToSumArray(Number(this.displayText)*this.valmulti,tag)
      this.falgmulti = false;
      this,this.valmulti =0;
    } else {
      this.addToSumArray(Number(this.displayText.replace(',','.')),tag)
    }
    this.displayText = "0,00";
    this.unitCount=0;
  }

  sumPreset(importo, tag){
    this.addToSumArray(importo,tag)
    this.displayText = "0,00";
    this.unitCount=0;
  }

  sub(){
    if(this.falgmulti==true){
      this.addToSumArray(Number(this.displayText)*this.valmulti*-1)
      this.falgmulti = false;
      this,this.valmulti =0;
    } else {
      this.addToSumArray(-1 * Number(this.displayText.replace(',','.')))
    }
    
    this.displayText = "0,00";
    this.unitCount=0;
  }

  multi(){
    this.falgmulti = true
    this.valmulti = Number(this.displayText.replace(',','.'))
    this.displayText = "0";
    this.unitCount=0;
  }

  addToSumArray(toadd,tag?){
    if(tag == null){
      tag = '';
    }

    this.importi.pipe(take(1)).subscribe(val => {
      var obj: listino = {importo: toadd, tag: tag}
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

  }

}
