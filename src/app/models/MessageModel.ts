import {UserModel} from './UserModel';

export enum MessageType {
  File, Text, Post
}
export class MessageModel{
  Sender: UserModel = new UserModel();
  SendDate: string;
  Type: MessageType;
  Id: string;
  TextContent: string;
  ImgUrl: string;
  FileUrl: string;
  getHtmlContent(): string{
    if (this.Type === MessageType.File){
      return `<button (click)="${this.loadFile()}">
                  <img src="./source/imgs/download-button-100.png">
              </button>
              <span>${this.TextContent}</span>`;
    }
    else if (this.Type === MessageType.Post){
      return `<span>${this.TextContent}</span>
              <img class="messageItem_content_img" src="${this.ImgUrl}">`;
    }
    else if (this.Type === MessageType.Text){
      return `<span>${this.TextContent}</span>`;
    }
  }
  loadFile(): void{
    // this.location.go(`/file/${this.MessageObj.FileUrl}`);
  }
}
