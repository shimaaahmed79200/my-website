import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  private _isMapShownSubject = new BehaviorSubject<boolean>(true); // Use BehaviorSubject

  // Expose the observable for subscribers
  public isMapShown$ = this._isMapShownSubject.asObservable();

  public isMapShownSetter(val: boolean) {
    this._isMapShownSubject.next(val); // Update the value
  }

  public isMapShownGetter(): boolean {
    return this._isMapShownSubject.getValue(); // Get the current value
  }
  
}
