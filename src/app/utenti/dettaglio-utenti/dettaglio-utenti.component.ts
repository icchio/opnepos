import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces';

@Component({
  selector: 'app-dettaglio-utenti',
  templateUrl: './dettaglio-utenti.component.html',
  styleUrls: ['./dettaglio-utenti.component.scss']
})
export class DettaglioUtentiComponent implements OnInit {

  constructor() { }

  public Nome = ''
  public Cognome = ''
  public NumeroTelefono = ''

  public usrObj: user

  ngOnInit() {
  }

  ngAfterViewInit(): void {
   this.usrObj = {
     Carte: [],
     Nome: '',
     Cognome : '',
     Telefono : ''
   }
    
  }

}
