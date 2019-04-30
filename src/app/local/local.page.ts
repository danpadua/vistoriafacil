import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'local.page.html',
  styleUrls: ['local.page.scss'],
})
export class LocalPage {

  constructor(public navCtrl: LocalController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }
}
