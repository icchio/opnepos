import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  public resetEv = new EventEmitter();

  constructor() { }

  resetCalc(){
    console.log('reset')
    this.resetEv.emit('reset')
  }
}
