import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {UrlParameters} from './CustomClass';
import {ContactList} from './services/ContactList';

@Component({
  selector: `app-root`,
  templateUrl: './source/html/root.component.html'
})
export class AppRootComponent {
  public contactList: ContactList = new ContactList();
  constructor(location: Location){
    location.onUrlChange( (url) => {
      const parameters: object = UrlParameters.Get(url);
      if (parameters[`DeleteStorage`]){
        this.contactList.getList().find(obj => obj.Id === parameters[`DeleteStorage`].toString()).TitleName = 'Deleted';
      }
    });
  }
}
