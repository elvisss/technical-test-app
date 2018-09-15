import { Component, OnInit } from '@angular/core';
import { IssService } from './../services/iss.service';
import { Subscription } from 'rxjs';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { Marker } from '../marker';
declare const google: any;

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  lat = 0;
  lng = 0;
  iss_lat = 0;
  iss_lng = 0;
  timer = 3000;

  triangleCoords: Marker[] = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757}
  ];

  constructor(
    private issService: IssService,
    private googleMapsAPIWrapper: GoogleMapsAPIWrapper
  ) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions() {
    this.issService
      .getPositions()
      .subscribe(res => {
        this.iss_lat = res.lat;
        this.iss_lng = res.lng;

        if (this.isInsideTriangle(res)) {
          alert('Dentro del triangulo de las bermudas');
        }

        setTimeout(() => {
          this.getPositions();
        }, this.timer);
      });
  }

  isInsideTriangle(latlng) {
    const curPosition = new google.maps.LatLng(this.iss_lat, this.iss_lng);
    const bermudaTriangle = new google.maps.Polygon({
      paths: this.triangleCoords
    });
    return this.googleMapsAPIWrapper.containsLocation(curPosition, bermudaTriangle);
  }

}
