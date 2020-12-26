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
    date: Date;
    importo: number;
}