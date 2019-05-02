import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { DadosPage } from './dados.page';
import { AppComponent } from 'src/app/app.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DadosPage
      }
    ])
  ],
  declarations: [DadosPage, AppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide:RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class DadosPageModule {}
