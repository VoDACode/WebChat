import {Component, Input} from '@angular/core';
import {StorageModel} from '../models/StorageModel';
import {PermissionsTemplateModel} from '../models/PermissionsTemplateModel';

class PermissionsTemplate{
  public Template: PermissionsTemplateModel = new PermissionsTemplateModel();
  public IsSelected: boolean;
}
@Component({
  selector: 'app-storage-settings',
  templateUrl: '../source/html/menu/storage.settings.html'
})

export class StorageSttingsComponent {
  @Input() IsVisible = false;
  selectColor = 'rgba(114, 171, 255, 0.5)';
  //
  menuTemplateArr: Array<boolean> = new Array<boolean>();
  permissionsTemplateList: Array<PermissionsTemplate> = new Array<PermissionsTemplate>();
  //
  storage: StorageModel = new StorageModel();
  constructor() {
    this.storage.TitleImg = 'assets/imgs/default-storage-icon.png';
    this.storage.TitleName = 'StorageName';
    this.storage.Status = 'Status';
    this.menuTemplateArr.length = 5;
    this.menuTemplateArr[0] = true;
    for (let i = 0; i < 5; i++) {
      const tmp = new PermissionsTemplate();
      tmp.IsSelected = (i === 0);
      tmp.Template.Name = 'Permission' + i;
      this.permissionsTemplateList.push(tmp);
    }
    console.log(this.menuTemplateArr);
    console.log(this.permissionsTemplateList);
  }

  selectMenuItem(item: number): void{
    for (let i = 0; i < this.menuTemplateArr.length; i++){
      this.menuTemplateArr[i] = false;
    }
    this.menuTemplateArr[item] = true;
  }

  selectPermissionsTemplateItem(selectedItem: PermissionsTemplate): void{
    for (const item of this.permissionsTemplateList) {
      if (item.Template !== selectedItem.Template) {
        item.IsSelected = false;
      }
      else {
        item.IsSelected = true;
      }
    }
  }
}
