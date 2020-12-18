import {EventEmitter} from '@angular/core';
import {ChatModel} from '../models/ChatModel';
import {MessageModel, MessageType} from '../models/MessageModel';
import {ContactList} from './ContactList';
import {ContactModel} from '../models/ContactModel';
import {Location} from '@angular/common';
import {MessageList} from './MessageList';

export class ChatHub{
  private static location: Location;
  private static chatList: Array<ChatModel> = new Array<ChatModel>();
  private static client: any;
  static selectChat: ChatModel;
  static connectionExists: boolean;
  static isRegistered: boolean;
  static onAddMessage: EventEmitter<void>;
  static onAddContactList: EventEmitter<void>;
  static onChangeUsersList: EventEmitter<void>;
  static onConnected: EventEmitter<void>;
  static onEditMessage: EventEmitter<void>;
  static onRegistered: EventEmitter<void>;
  private static server: any;
  private static userId: string;

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
  }
}
