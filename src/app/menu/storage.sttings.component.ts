import {Component, Input} from '@angular/core';
import {StorageModel} from '../models/StorageModel';
import {PermissionsTemplateModel} from '../models/PermissionsTemplateModel';

@Component({
  selector: 'app-storage-settings',
  templateUrl: '../source/html/menu/storage.settings.html'
})

export class StorageSttingsComponent {
  IsVisible = false;
  selectColor = 'rgba(114, 171, 255, 0.5)';
  //
  menuTemplateArr: Array<boolean> = new Array<boolean>();
  permissionsTemplateList: Array<ViewPermissionsTemplate> = new Array<ViewPermissionsTemplate>();
  //
  storage: StorageModel = new StorageModel();
  constructor() {
    this.test();
  }

  private test(): void{
    this.storage.TitleImg = 'assets/imgs/default-storage-icon.png';
    this.storage.TitleName = 'StorageName';
    this.storage.Status = 'Status';
    this.menuTemplateArr.length = 5;
    this.menuTemplateArr[0] = true;
    for (let i = 0; i < 5; i++) {
      const tmp: any = {
        IsSelected: false,
        Template: new PermissionsTemplateModel()
      };
      tmp.IsSelected = (i === 0);
      tmp.Template.Name = 'Permission' + i;
      this.permissionsTemplateList.push(tmp);
    }
  }

  selectMenuItem(item: number): void{
    for (let i = 0; i < this.menuTemplateArr.length; i++){
      this.menuTemplateArr[i] = false;
    }
    this.menuTemplateArr[item] = true;
  }

  selectPermissionsTemplateItem(selectedItem: number): void{
    for (let i = 0; i < this.permissionsTemplateList.length; i++) {
      if (i === selectedItem){
        this.permissionsTemplateList[i].IsSelected = true;
      }else {
        this.permissionsTemplateList[i].IsSelected = false;
      }
    }
  }
  getSelectPermissionsTemplateItem(): ViewPermissionsTemplate{
    return this.permissionsTemplateList.find(obj => obj.IsSelected);
  }
}
interface ViewPermissionsTemplate{
  IsSelected: boolean;
  Template: PermissionsTemplateModel;
}
