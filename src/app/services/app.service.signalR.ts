import {EventEmitter} from '@angular/core';
import {ChatModel} from '../models/ChatModel';
import {MessageModel} from '../models/MessageModel';
import {Location} from '@angular/common';
import {UserModel} from '../models/UserModel';

export class ChatHub{
  private static location: Location;
  static chatList: Array<ChatModel> = new Array<ChatModel>();
  private static client: any;
  static User: UserModel = new UserModel();
  static selectChat: ChatModel = new ChatModel();
  static connectionExists: boolean;
  static isRegistered: boolean;
  static onAddMessage: EventEmitter<void> = new EventEmitter<void>();
  static onAddContactList: EventEmitter<void> = new EventEmitter<void>();
  static onChangeUsersList: EventEmitter<void> = new EventEmitter<void>();
  static onConnected: EventEmitter<void> = new EventEmitter<void>();
  static onEditMessage: EventEmitter<void> = new EventEmitter<void>();
  static onRegistered: EventEmitter<void> = new EventEmitter<void>();
  static onSelectContact: EventEmitter<void> = new EventEmitter<void>();

  public static initialize(local: Location): void{
    this.location = local;
  }

  private static Connect(): void {
  }

  static Disconnected(): void {
  }

  static getContactList(): void {
  }

  static getMessageList(sID: string, myPos: number, viewCount: string): void{
  }

  private static logIn(): void {
  }

  static sendMessage(message: MessageModel): void {
    this.selectChat.MessageList.push(message);
  }
}
