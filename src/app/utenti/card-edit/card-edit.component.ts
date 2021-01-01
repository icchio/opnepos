import { AngularFirestore } from '@angular/fire/firestore';
import { firebaseUser } from './../utenti.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {

  @Input() user: firebaseUser;
  public cardNumber: string;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  aggiungiCard() {
    this.user.Carte.push({ IdCard: this.cardNumber, Movimenti: [] });
    this.firestore.collection('user').doc(this.user.id).update({Carte : this.user.Carte});
  }

}
