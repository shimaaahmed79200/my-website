import { AfterViewInit, Component, OnChanges, SimpleChanges } from '@angular/core';
import { MarkerService } from 'src/app/services/marker.service';
import * as L from 'leaflet';
import { SharedServiceService } from 'src/app/services/shared-service.service';

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
  styleUrls: ['./events.component.css','../../../styles.css']
})
export class EventsComponent implements AfterViewInit{

  displayMap: boolean = true;

  private map!: L.Map;

  constructor(private markerService: MarkerService, private sharedService: SharedServiceService) {}

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
    this.sharedService.isMapShown$.subscribe(isShown => {
      this.displayMap = isShown; 
      
      setTimeout(()=>{
        this.updateMap();
        this.markerService.makeCapitalMarkers(this.map);
      }, 100)
    });
  }

  private updateMap() {
    if (this.displayMap) {
      if (!this.map) {
        this.initMap();
      }
    } else {
      if (this.map) {
        this.map.remove();
        this.map = undefined!;
      }
    }
  }
}
