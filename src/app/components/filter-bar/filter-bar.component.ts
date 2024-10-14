import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css','../../../styles.css']
})
export class FilterBarComponent{
  constructor(private sharedService:SharedServiceService){}

  private isMapShown = true;

  toggleVisiablity(){
      Array.from(document.getElementsByClassName('filterBtn')).forEach(element => {
        element.classList.toggle('visable');
      });
      var element = document.getElementsByClassName('filterBtns-container')[0];
      element.classList.toggle('visable');
  }

  toggleMap(){
    this.isMapShown = !this.isMapShown;
    this.sharedService.isMapShownSetter(this.isMapShown);
    document.getElementById('mapButton')?.classList.toggle('active')
  }
}
