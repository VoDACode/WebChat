import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {UrlParameters} from './CustomClass';
import {ContactList} from './services/ContactList';
import {ContactModel} from './models/ContactModel';

@Component({
  selector: `app-root`,
  templateUrl: './source/html/root.component.html'
})
export class AppRootComponent {
  public contactList: ContactList = new ContactList();
  constructor(location: Location){
    location.onUrlChange( (url) => {
      const parameters = UrlParameters.Get(url);
      if (parameters.DeleteStorage){
        this.contactList.getList().find(obj => obj.Id === parameters.DeleteStorage.toString()).TitleName = 'Deleted';
      }
    });
    for (let i = 0; i <= 5; i++){
      const obj = new ContactModel(location);
      obj.TitleName = `Name${i}`;
      obj.Id = `contact_${i}`;
      obj.Status = `Status${i}`;
      obj.TitleImg = 'assets/imgs/default-storage-icon.png';
      this.contactList.add(obj);
    }
  }
}
