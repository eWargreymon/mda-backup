import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FlowerServiceService {

  constructor(private readonly afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection('Flowers').snapshotChanges();
  }

  getFlower(id: string){

  }

}

export interface Flower{
  name: string;
  description: string;
  image: string;
  location: string;
  scname: string;
}
