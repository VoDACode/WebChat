export enum StorageType {
  Channel, Group, Private
}
export class StorageModel{
  Id: string;
  TitleImg = 'assets/imgs/default-storage-icon.png';
  TitleName = '';
  Status = '';
  IsPrivate: boolean;
  UniversalName = '';
  CreateDate: string;
  Type: StorageType;
}
