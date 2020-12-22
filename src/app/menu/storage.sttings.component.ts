import {Component, Input} from '@angular/core';
import {PermissionsTemplateModel} from '../models/PermissionsTemplateModel';
import {UserModel} from '../models/UserModel';
import {DateAddon} from '../CustomClass';
import {ChatModel} from '../models/ChatModel';
import {ChatHub} from '../services/app.service.signalR';
import {SwitchComponent, SwitchType} from '../switch.component';

@Component({
  selector: 'app-storage-settings',
  templateUrl: '../source/html/menu/storage.settings.html'
})

export class StorageSttingsComponent {
  IsVisible = false;
  selectColor = 'rgba(114, 171, 255, 0.5)';
  //
  menuTemplateArr: Array<boolean> = new Array<boolean>();
  constructor() {
    this.test();
  }

  private test(): void{
    this.getSelectChat().Storage.TitleImg = 'assets/imgs/default-storage-icon.png';
    this.getSelectChat().Storage.TitleName = 'StorageName';
    this.getSelectChat().Storage.Status = 'Status';
    this.menuTemplateArr.length = 5;
    this.menuTemplateArr[0] = true;
    for (let i = 0; i < 5; i++) {
      const tmp: any = {
        IsSelected: false,
        Template: new PermissionsTemplateModel()
      };
      tmp.IsSelected = (i === 0);
      tmp.Template.Name = 'Permission' + i;
      this.getSelectChat().PermissionsTemplateList.push(tmp);
    }
    //
    for (let i = 0; i < 20; i++){
      const tmp = new ModelJoinLink();
      tmp.URL = location.hash + '/join/sUID/num' + i;
      tmp.UserCreator.UserName = 'UserName' + i;
      tmp.CreateDate = Date();
      this.getSelectChat().JoinLinks.push(tmp);
    }
    //
    for (let i = 0; i < 3; i++){
      const tmp = new ModelBad();
      tmp.Reason = 'Reason' + i;
      tmp.User.UserName = 'UserName' + i;
      tmp.EndDate = new Date('2020-12-20 23:00');
      tmp.StartDate = new Date('2020-12-19 23:00');
      this.getSelectChat().BanList.push(tmp);
    }
    //
    for (let i = 0; i < 5; i++){
      const tmp = new ModelLog();
      tmp.Content = 'Content' + i;
      tmp.User.UserName = 'UserName';
      const date = new Date();
      date.setDate(date.getDate() + i);
      tmp.CareateDate = date;
      this.getSelectChat().LogList.push(tmp);
    }
  }

  selectMenuItem(item: number): void{
    for (let i = 0; i < this.menuTemplateArr.length; i++){
      this.menuTemplateArr[i] = false;
    }
    this.menuTemplateArr[item] = true;
  }

  selectPermissionsTemplateItem(selectedItem: number): void{
    for (let i = 0; i < this.getSelectChat().PermissionsTemplateList.length; i++) {
      if (i === selectedItem){
        this.getSelectChat().PermissionsTemplateList[i].IsSelected = true;
      }else {
        this.getSelectChat().PermissionsTemplateList[i].IsSelected = false;
      }
    }
  }
  getSelectPermissionsTemplateItem(): ModelPermissionsTemplate{
    return this.getSelectChat().PermissionsTemplateList.find(obj => obj.IsSelected);
  }
  getSelectChat(): ChatModel{
    return ChatHub.selectChat;
  }
  setPermissionParam(obj: any): void{
    this.getSelectPermissionsTemplateItem().Template[obj.parameter] = obj.val;
  }
  setPrivate(obj: any): void{
    this.getSelectChat().Storage[obj.parameter] = obj.val;
    console.log(this.getSelectChat().Storage.IsPrivate);
  }
}
export class ModelPermissionsTemplate{
  IsSelected: boolean;
  Template: PermissionsTemplateModel;
}
export class ModelJoinLink{
  UserCreator: UserModel = new UserModel();
  URL: string;
  CreateDate: string;
  delete(): void{
    alert(this.URL);
  }
}
export class ModelBad{
  User: UserModel = new UserModel();
  StartDate: Date;
  EndDate: Date;
  Reason: string;
  FormatDate(obj, template = 'YYYY.MM.DD hh:mm:ss'): string{
    return DateAddon.Format(obj, template);
  }
  Duration(): string{
    const sD = new Date(this.StartDate);
    const eD = new Date(this.EndDate);
    const resD = new Date(eD.getMilliseconds() - sD.getMilliseconds());
    let res = (resD.getFullYear() - 1970 > 0) ? DateAddon.Format(resD) : '';
    if (resD.getFullYear() - 1970 === 0) {
      res = (resD.getMonth() > 0) ? DateAddon.Format(resD, 'MM.DD hh:mm:ss') : '';
    }
    if (resD.getMonth() === 0){
      res = (resD.getDate() > 0) ? DateAddon.Format(resD, 'DD hh:mm:ss') : '';
    }
    if (resD.getDate() === 0){
      res = DateAddon.Format(resD, 'hh:mm:ss');
    }
    return res;
  }
}
export class ModelLog{
  CareateDate: Date;
  User: UserModel = new UserModel();
  Content: string;
  FormatDate(obj, template = 'YYYY.MM.DD hh:mm:ss'): string{
    return DateAddon.Format(obj, template);
  }
}
