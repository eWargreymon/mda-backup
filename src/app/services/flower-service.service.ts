import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlowerServiceService {

  flowerList: AngularFirestoreCollection<Flower>;

  constructor(private readonly afs: AngularFirestore) { }

  getAll(){
    return this.afs.collection('Flowers').snapshotChanges();
  }

  getList(){
    return this.flowerList.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Flower))
      );
  }

  addFlower(payload: Flower){
    return this.afs.collection('Flowers').add(payload);
  }

}

export interface Flower{
  name: string;
  description: string;
  image: string;
  location: string;
  scname: string;
}
