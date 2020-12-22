import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {UrlParameters} from './CustomClass';
import {ChatHub} from './services/app.service.signalR';
import {ChatModel} from './models/ChatModel';

@Component({
  selector: `app-root`,
  templateUrl: './source/html/root.component.html'
})
export class AppRootComponent {
  constructor(location: Location){
    ChatHub.User.UserName = 'VoDA';
    location.onUrlChange( (url) => {
      const parameters = UrlParameters.Get(url);
      if (parameters.DeleteStorage){
        // this.contactList.getList().find(obj => obj.Id === parameters.DeleteStorage.toString()).TitleName = 'Deleted';
      }
    });
  }
  getSelectChat(): ChatModel{
    return ChatHub.selectChat;
  }
  getChatList(): Array<ChatModel>{
    return ChatHub.chatList;
  }
}
