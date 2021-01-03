import { AngularFirestore } from '@angular/fire/firestore';
import { firebaseUser } from './../utenti.component';
import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { card, movimentiCard } from 'src/app/interfaces';
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { defer } from 'rxjs';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  
  @Input() user: firebaseUser;
  @Input() card: card;

  public cardNumber: string;
  public importo:string = '0,00'

  public titolo = ''
  public btnName = ''

  public disableInput = false;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    console.log(this.card);
    
    if(this.card != null){
      this.cardNumber = this.card.IdCard;
      this.disableInput = true;
      this.titolo = 'Ricarcia Carta'
      this.btnName = 'Ricarica'
    } else {
      this.titolo = 'Nuova Carta'
      this.btnName = 'Crea'
    }
  }

  async salvaCard() {
    if(this.btnName == 'Crea'){
      let checkCard = await Promise.resolve(this.VerificaCard(this.cardNumber));
      if(checkCard != null){
        alert("Carta già registrata")
        return
      }
      this.user.Carte.push({ IdCard: this.cardNumber, Movimenti: [] });

      if(this.importo != '' || this.importo != null){
        let Movimento: movimentiCard = { Data : firebase.firestore.Timestamp.fromDate(new Date()),Importo:Number(this.importo.replace(',','.'))}
        this.user.Carte[this.user.Carte.length -1].Movimenti.push(Movimento);
        console.log(this.user.Carte)
      }
      this.firestore.collection('user').doc(this.user.id).update({Carte : this.user.Carte});
    } else {
      let Movimento: movimentiCard = { Data : firebase.firestore.Timestamp.fromDate(new Date()),Importo:Number(this.importo.replace(',','.'))}
      this.user.Carte.find(p => p.IdCard == this.card.IdCard).Movimenti.push(Movimento)
      this.firestore.collection('user').doc(this.user.id).update({Carte : this.user.Carte});
    }
  }

  async VerificaCard(srcNumeroCarta){
    let prom = new Promise((res,rej) => {
      this.firestore.collection('user').get().subscribe(p => {
        p.docs.forEach(u => {
          let thisu = {id:u.id, ...u.data()} as firebaseUser
          let card = thisu.Carte.find(p => p.IdCard == srcNumeroCarta)
          if(card){
            console.log(card)
            res(thisu);
          }
        })
      })
    })
    return prom
    
  }

}
