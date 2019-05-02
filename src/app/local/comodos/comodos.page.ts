import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'comodos.page.html',
  styleUrls: ['comodos.page.scss'],
})
export class ComodosPage {
  private selectedItem: any;
  public items: Array<{ title: string; icon: string }> = [];
  constructor(public alertController : AlertController) {
  }

  remove(item: any) {
    this.items = this.items.filter((i) => {
      return i !== item
    })
  }

  async formPrompAlert() {
    const alert = await this.alertController.create({
      header: 'Novo cômodo',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: (t) => {
            this.items.push({
              title: t.nome,
              icon: 'cube'
            })
          }
        }
      ]
    });

    await alert.present();
  }
}
