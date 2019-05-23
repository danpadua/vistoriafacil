import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
declare var google: any;


@Component({
  selector: 'app-home',
  templateUrl: 'dados.page.html',
  styleUrls: ['dados.page.scss'],
})

export class DadosPage {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = { lat: null, lng: null };
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;
  apiKey: any = 'AIzaSyBCV4H2ZKhVUIsnueWQDOEZTUyO4NUrDbA';

  constructor(public zone: NgZone, public geolocation: Geolocation, public http : Http) {
    let script = document.createElement('script');
    script.id = 'googleMap';
    var _apiKey = this.apiKey;
    var _http = this.http;

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
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false
    }

    function handleEvent(event) {
      if (!this.location) this.location = { lat: null, lng: null }
      this.location.lat = event.latLng.lat();
      this.location.lng = event.latLng.lng();
      this.map.setCenter(this.location)
      setAddrLatLon(this.location)
    }

    function setAddrLatLon(location) {
      if (location) {
        var urlApi = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        var apiAddress = urlApi.concat(location.lat, ',', location.lng, '&key=', _apiKey)
        _http.get(apiAddress, {})
          .subscribe((res: Response) => {
            if (res.status === 200) {
              var result = JSON.parse(res.text());
              console.log(result);
            }
          })
      }
    }

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
      this.markerOptions.position = this.location;
      this.markerOptions.map = this.map;
      this.markerOptions.draggable = true;
      this.markerOptions.title = 'Minha localização';
      this.marker = new google.maps.Marker(this.markerOptions);
      this.marker.addListener('dragend', handleEvent);
    }, 3000)
  }
}