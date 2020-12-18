import {ContactModel} from '../models/ContactModel';

export class ContactList {
  private list: Array<ContactModel> = new Array<ContactModel>();
  public add(obj: ContactModel): void{
    this.list.push(obj);
  }
  public getList(): ContactModel[]{
    return this.list;
  }
}
