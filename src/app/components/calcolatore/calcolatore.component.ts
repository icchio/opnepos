import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CalcService } from './calc.service'

@Component({
  selector: 'calcolatore',
  templateUrl: './calcolatore.component.html',
  styleUrls: ['./calcolatore.component.scss']
})
export class CalcolatoreComponent implements OnInit {

  @Output() display = new EventEmitter();
  @Output() calcEv = new EventEmitter();
  @Input() tipo: string = 'full'

  public ClearEv = new Observable();

  public displayText: string = '0,00'
  public unitCount = 0;
  public falgmulti = false;
  public valmulti = 0;

  public full:boolean = true;

  constructor(public calc : CalcService) {

    this.calc.resetEv.on('reset',e => {
      this.displayText = "0,00";
      this.unitCount=0;
      this.display.emit(this.displayText);
    })
   }

  ngOnInit() {
    if(this.tipo == 'noop'){
      this.full = false;
    }
  }

  clickNum(n){
    if(this.falgmulti== true){
      if(this.unitCount==0){
        this.displayText = n
      } else{
        this.displayText = this.displayText.toString() + n;
      }
      this.unitCount = this.unitCount+1; 
      this.display.emit(this.displayText);
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
    this.display.emit(this.displayText);
  }

  canc(){
    if(this.unitCount <= 0){
      this.display.emit(this.displayText);
      return;
    }
    if(this.falgmulti== true){
      if(this.unitCount==1){
        this.displayText = '0';
        this.unitCount = this.unitCount-1;
        this.display.emit(this.displayText);
        return;
      }
      this.displayText = this.displayText.substring(0,this.displayText.length - 1)
      this.unitCount = this.unitCount-1; 
      this.display.emit(this.displayText);
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
    this.display.emit(this.displayText);
  }

  sub(){
    if(this.falgmulti==true){
      //this.addToSumArray(Number(this.displayText)*this.valmulti*-1)
      this.calcEv.emit(Number(this.displayText)*this.valmulti*-1)
      this.falgmulti = false;
      this,this.valmulti =0;
    } else {
      //this.addToSumArray(-1 * Number(this.displayText.replace(',','.')))
      this.calcEv.emit(-1 * Number(this.displayText.replace(',','.')))
    }
    
    this.displayText = "0,00";
    this.unitCount=0;
    this.display.emit(this.displayText);
  }

  sum(){
    if(this.falgmulti==true){
      //this.addToSumArray(Number(this.displayText)*this.valmulti,tag)
      this.calcEv.emit(Number(this.displayText)*this.valmulti)
      this.falgmulti = false;
      this,this.valmulti =0;
    } else {
      this.calcEv.emit(Number(this.displayText.replace(',','.')))
      //this.addToSumArray(Number(this.displayText.replace(',','.')),tag)
    }
    this.displayText = "0,00";
    this.unitCount=0;
    this.display.emit(this.displayText);
  }

  multi(){
    console.log('qui')
    this.falgmulti = true
    this.valmulti = Number(this.displayText.replace(',','.'))
    console.log(this.valmulti)
    this.displayText = "0";
    this.unitCount=0;
    this.display.emit(this.displayText);
  }

}
