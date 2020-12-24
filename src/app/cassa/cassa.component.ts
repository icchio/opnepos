import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.scss']
})
export class CassaComponent implements OnInit {

  displayText = '0,00';
  calcVal = 0.00;
  unitCount = 0;

  constructor() { }

  ngOnInit() {
  }

  clickNum(n){
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
    this.calcVal=  Number(this.displayText.replace(',','.'))
  }

  canc(){
    if(this.unitCount <= 0){
      return;
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
    this.calcVal=  Number(this.displayText.replace(',','.'))
  }

}
