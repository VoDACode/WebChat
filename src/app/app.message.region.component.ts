import {Component} from '@angular/core';
import {MessageModel, MessageType} from './models/MessageModel';
import {Location} from '@angular/common';
import {MessageList} from './services/MessageList';
import {ChatHub} from './services/app.service.signalR';
import {ChatModel} from './models/ChatModel';

@Component({
  selector: `app-message-region`,
  templateUrl: './source/html/message.region.component.html'
})

export class AppMessageRegionComponent {
  IsVisible = true;
  TextContent = '';
  SelectFile: any;
  private location: Location;
  constructor(local: Location) {
    this.location = local;
  }
  sendMessage(): void{
    if (this.TextContent === '') {
      return;
    }
    const tmp = new MessageModel();
    tmp.TextContent = this.TextContent;
    // DO TO
    tmp.Type = MessageType.Text;
    tmp.Sender = ChatHub.User;
    tmp.SendDate = new Date().toDateString();
    ChatHub.sendMessage(tmp);
    this.TextContent = '';
  }
  getHubSelectChat(): ChatModel{
    return ChatHub.selectChat;
  }
}
