import {StorageModel} from './StorageModel';

export class PermissionsTemplateModel{
  Id: number;
  Name: string;
  Storage: StorageModel = new StorageModel();
  // Roles
  IsDeleteRoles: boolean;
  IsCreateRoles: boolean;
  IsOwner: boolean;
  // Users
  IsKickUser: boolean;
  IsBanUser: boolean;
  IsMuteUser: boolean;
  // Messages
  IsSendMessage: boolean;
  IsDeleteMessages: boolean;
  IsSendFiles: boolean;
  // Storage
  IsRenameStorage: boolean;
  IsDeleteStorage: boolean;
  IsEditTitleImage: boolean;
  IsGenerateJoinURL: boolean;
  IsCopyJoinURL: boolean;
  IsReadLog: boolean;
}
