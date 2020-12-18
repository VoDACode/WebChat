export enum StorageType {
  Channel, Group, Private
}
export class StorageModel{
  Id: string;
  TitleImg = 'assets/imgs/default-storage-icon.png';
  TitleName: string;
  Status: string;
  IsPrivate: boolean;
  UniversalName: string;
  CreateDate: string;
  Type: StorageType;
}
