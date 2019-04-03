import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: "root"
})
export class OrdersService {

  constructor(private afs:AngularFirestore) {}

  //TODO: grupo de campos formulario controlados por código

  //Firestore CRUD actions
  createCoffeeOrder(data) {
    return new Promise<boolean>((resolve,reject) => {
      this.afs.collection('coffeeOrders')
      .add(data)
      .then(
        res => { resolve(true); }, 
        err => reject(err)
      );
    });
  }

  updateCoffeeOrder(data) {
    this.afs.collection('coffeeOrders')
    .doc(data.payload.doc.id)
    .set({completed:true}, {merge:true});
  }

  getCoffeeOrders() {
    return this.afs.collection('coffeeOrders').snapshotChanges();
  }

  deleteCoffeeOrder(data) {
    return new Promise((resolve,reject) => {
      this.afs.collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .delete()
      .then(
        res => { resolve(true); }, 
        err => reject(err)
      );
    });
  }
}
