import {StorageModel, StorageType} from './StorageModel';
import {ChatHub} from '../services/app.service.signalR';

export class ContactModel implements StorageModel{
  CreateDate: string;
  Id: string;
  IsPrivate: boolean;
  Status: string;
  TitleImg: string;
  TitleName: string;
  Type: StorageType;
  UniversalName: string;
  clickInContact(): void{
    ChatHub.selectChat = ChatHub.chatList.find(obj => obj.Storage.Id === this.Id);
    ChatHub.onSelectContact.emit();
  }
}
