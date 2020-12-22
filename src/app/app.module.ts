import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRootComponent} from './app.root.component';
import {AppMessageRegionComponent} from './app.message.region.component';
import {RouterModule, Routes} from '@angular/router';
import {Location} from '@angular/common';
import {UrlParameters} from './CustomClass';
import {ChatHub} from './services/app.service.signalR';
import {AppMenuComponent} from './app.menu.component';
import {DetailInfoAboutStorageComponent} from './menu/detail.Info.About.Storage';
import {StorageSttingsComponent} from './menu/storage.sttings.component';
import {CreateStorageMenuComponent} from './menu/create.storage.menu.component';
import {SwitchComponent} from './switch.component';

const appRoutes: Routes = [
  { path: '*', component: AppRootComponent}
];

@NgModule({
  declarations: [
    AppRootComponent, AppMessageRegionComponent, AppMenuComponent, StorageSttingsComponent
    , DetailInfoAboutStorageComponent, CreateStorageMenuComponent, SwitchComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule {
  constructor(l: Location) {
    UrlParameters.initialize(l);
    ChatHub.initialize(l);
  }
}
