import { firestore } from "firebase";

export interface listino{
    tag : string,
    importo: number,
    descrizione: string
  }

export interface user {
    Nome:string;
    Cognome:string;
    Telefono:string;
    Carte: card[];
}

export interface card {
    IdCard : string;
    Movimenti: movimentiCard[];
}

export interface movimentiCard {
    Data: firestore.Timestamp;
    Importo: number;
}