import {Location} from '@angular/common';
import {StorageModel, StorageType} from './StorageModel';

export class ContactModel implements StorageModel{

  constructor(private location: Location) { }

  CreateDate: string;
  Id: string;
  IsPrivate: boolean;
  Status: string;
  TitleImg: string;
  TitleName: string;
  Type: StorageType;
  UniversalName: string;
  clickInContact(): void{
    this.location.go(`/?StorageUID=${this.Id}`);
  }
}
