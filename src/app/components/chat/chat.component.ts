import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'
import {message} from '../../models/message';
import {ChatsService} from '../../services/chats.service'
import {AngularFireAuth} from '@angular/fire/auth';
import * as crypto from 'crypto-js'


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chat: any;
  public mensajes = [];
  //public message: message;
  public room: any;
  public msg: string;
  public nombre= this.auth;
  constructor(
      private navparams: NavParams,
      private modal: ModalController,
      private chatService: ChatsService,
      private auth: AngularFireAuth) { }

  ngOnInit() {
    this.chatService.getChatRoom(this.chat.id).subscribe(room=> {
      console.log(this.nombre);
      this.room = room;
    });
    this.chat = this.navparams.get('chat');
  }
  closeChat(){
    this.modal.dismiss();
  }
  sendMessage(){
    const mensaje: message ={
      //content: this.msg,
      content: crypto.AES.encrypt(this.msg,'123456').toString(),
      type: 'text',
      date: new Date()
    }
    this.chatService.sendMsgToFirebase(mensaje, this.chat.id);
    this.msg= '';
  }
}
