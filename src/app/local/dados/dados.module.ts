import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { DadosPage } from './dados.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: DadosPage
      }
    ])
  ],
  declarations: [DadosPage],
  providers: [
    StatusBar,
    Geolocation,
    {provide:RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class DadosPageModule {}
