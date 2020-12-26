import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.scss']
})
export class CassaComponent implements OnInit {

  displayText = '0,00';
  calcVal = 0.00;
  
  unitCount = 0;
  subject: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  importi : Observable<any> =  this.subject.asObservable();

  falgmulti = false;
  valmulti = 0;

  constructor() { 
    this.importi.subscribe(k => 
     {
       this.calcVal = 0;
       console.log(k)
       k.forEach(num => {
         this.calcVal = this.calcVal + num;
       });
     })
  }

  ngOnInit() {
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

  sum(){
    if(this.falgmulti==true){
      this.addToSumArray(Number(this.displayText)*this.valmulti)
      this.falgmulti = false;
      this,this.valmulti =0;
    } else {
      this.addToSumArray(Number(this.displayText.replace(',','.')))
    }
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


  addToSumArray(toadd){
    this.importi.pipe(take(1)).subscribe(val => {
      console.log(val)
      const newArr = [...val, toadd];
      this.subject.next(newArr);
    })
  }


}
