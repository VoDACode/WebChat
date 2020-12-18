import {Component} from '@angular/core';
import {MessageModel, MessageType} from './models/MessageModel';
import {Location} from '@angular/common';
import {MessageList} from './services/MessageList';
import {ChatHub} from './services/app.service.signalR';

@Component({
  selector: `app-message-region`,
  templateUrl: './source/html/message.region.component.html'
})

export class AppMessageRegionComponent {
  // MessageBox
  MessageList: MessageList = new MessageList();
  // sendForm
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
    //#region
    tmp.Type = MessageType.Text;
    tmp.Sender.UserName = 'VoDA';
    tmp.SendDate = new Date().toDateString();
    //#endregion
    this.MessageList.add(tmp);
    this.TextContent = '';
    console.log(this.MessageList);
  }
}
