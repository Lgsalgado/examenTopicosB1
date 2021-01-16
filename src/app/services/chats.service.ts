import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {message} from '../models/message';
import firebase from 'firebase';
import firestore = firebase.firestore;
export interface chat {
  descripcion: string;
  name: string;
  id: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private db: AngularFirestore) { }
  public getChatRooms(){
    return this.db.collection('users').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as chat;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getChatRoom(chat_id : string){
    return this.db.collection('users').doc(chat_id).valueChanges()
  }
  sendMsgToFirebase(message: message, chat_id: string){
    this.db.collection('users').doc(chat_id).update({
      messages: firestore.FieldValue.arrayUnion(message)
    })
  }
}
