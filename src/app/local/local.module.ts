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
        loadChildren: '../local/dados/dados.module#DadosPageModule'
      },
      {
        path: 'comodos',
        loadChildren: '../local/comodos/comodos.module#ComodosPageModule'
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
