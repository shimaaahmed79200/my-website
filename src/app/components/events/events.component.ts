import { Component, OnInit } from '@angular/core';
import { MarkerService } from 'src/app/services/marker.service';
import * as L from 'leaflet';


const iconUrl = 'assets/icons/location.png';
const iconDefault = L.icon({
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  
  constructor(private markerService: MarkerService){}

  private map! : L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  
  ngOnInit(): void {
    this.initMap()
    this.markerService.makeCapitalMarkers(this.map);
  }


}
