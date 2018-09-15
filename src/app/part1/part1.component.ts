import { Component, OnInit } from '@angular/core';
import { MapServiceService } from './../services/map-service.service';
import { Subscription } from 'rxjs';
// import { GoogleMapsAPIWrapper, PolygonManager } from '@agm/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  lat: number = 0;
  lng: number = 0;
  iss_lat = 0;
  iss_lng = 0;
  timer = 3000;

  constructor(
    private mapServiceService: MapServiceService,
    // private googleMapsAPIWrapper: GoogleMapsAPIWrapper,
    // private polygonManager: PolygonManager
  ) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions() {
    this.mapServiceService
      .getPositions()
      .subscribe(res => {
        
        this.iss_lat = parseInt(res.latitude);
        this.iss_lng = parseInt(res.longitude);

        // this.isInsideTriangleCoords(res, new Polygon(this.triangleCoords))
        //   .then(() => {
        //     alert("Está dentro del triángulo de las bermudas");
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })

        setTimeout(() => {
          this.getPositions();
        }, this.timer);
      })
  }

  // isInsideTriangleCoords(latLng, polygon): Promise<any> {
  //   return this.googleMapsAPIWrapper.containsLocation(latLng, polygon)
  // }

  public triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757}
  ];

}
