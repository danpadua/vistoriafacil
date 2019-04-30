import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { LocalPage } from './local.page';


const routes: Routes = [
  {
    path: '',
    component: LocalPage,
    children: [
      {
        path: 'dados',
        loadChildren: './vistoria/vistoria.module#VistoriaPageModule'
      },
      {
        path: 'comodos',
        loadChildren: './vistoria/vistoria.module#VistoriaPageModule'
      }
    ]
  }
] 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocalPage]
})
export class LocalPageModule {}
