import {Component} from '@angular/core';
import {StorageModel} from '../models/StorageModel';

@Component({
  selector: 'app-detail-info-storage',
  templateUrl: '../source/html/menu/detail.Info.About.Storage.html'
})

export class DetailInfoAboutStorageComponent{
  IsVisible = false;
  storage: StorageModel = new StorageModel();
  constructor() {
    this.storage.TitleName = 'StorageName';
    this.storage.Status = 'Status';
  }
}
