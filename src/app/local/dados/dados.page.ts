import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//https://medium.com/ramsatt/integrate-google-maps-on-ionic-4-beta-application-37497dbc12e3
@Component({
  selector: 'app-home',
  templateUrl: 'dados.page.html',
  styleUrls: ['dados.page.scss'],
})

@ViewChild('Map') mapElement: ElementRef;
declare var google: any;
export class DadosPage {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = { lat: null, lng: null };
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;
  apiKey: any = 'AIzaSyBCV4H2ZKhVUIsnueWQDOEZTUyO4NUrDbA';

  public geolocation: Geolocation

  constructor(public zone: NgZone, public geolocation: Geolocation) {
    let script = document.createElement('script');
    script.id = 'googleMap';

    if (this.apiKey) {
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
      script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }

    document.head.appendChild(script);

    this.geolocation.getCurrentPosition().then((position) => {
      this.location.lat = position.coords.latitude;
      this.location.lng = position.coords.longitude;
    });

    this.mapOptions = {
      center: this.location,
      zoom: 21,
      mapTypeControl: false
    }

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'Minha localização';
      this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000)
  }
}
