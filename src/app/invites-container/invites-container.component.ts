import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Car } from '../invites-grid/invites-grid.component';

@Component({
  selector: 'app-invites-container',
  templateUrl: './invites-container.component.html',
  styleUrls: ['./invites-container.component.css']
})
export class InvitesContainerComponent implements OnInit {
  private currentCarTypeSubject = new BehaviorSubject<string>('Small');
  public car$: Observable<Car[]>;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.car$ = this.currentCarTypeSubject.pipe(switchMap(x => {
      console.log(x);
      return this.carService.getData(x).pipe(tap(y => console.log(y)));
    }));
  }

  onSelectionChanged(selection: string) {
    console.warn('Key pressed', selection);
    this.currentCarTypeSubject.next(selection);
  }
}
