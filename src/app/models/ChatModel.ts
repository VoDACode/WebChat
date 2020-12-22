import {MessageModel} from './MessageModel';
import {StorageModel} from './StorageModel';
import {ModelBad, ModelJoinLink, ModelLog, ModelPermissionsTemplate} from '../menu/storage.sttings.component';
import {ContactModel} from './ContactModel';

export class ChatModel {
  MessageList: Array<MessageModel> = new Array<MessageModel>();
  UsersList: Array<MessageModel> = new Array<MessageModel>();
  Storage: ContactModel = new ContactModel();
  PermissionsTemplateList: Array<ModelPermissionsTemplate> = new Array<ModelPermissionsTemplate>();
  JoinLinks: Array<ModelJoinLink> = new Array<ModelJoinLink>();
  BanList: Array<ModelBad> = new Array<ModelBad>();
  LogList: Array<ModelLog> = new Array<ModelLog>();
}
