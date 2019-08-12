import { Injectable } from '@angular/core';
import { Car } from './invites-grid/invites-grid.component';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getData(carType: string): Observable<Car[]> {
    switch (carType) {
      case 'Small':
        return from(this.getCarsSmall());
      case 'Medium':
        return from(this.getCarsMedium());
      case 'Large':
        return from(this.getCarsLarge());
      case 'Huge':
        return from(this.getCarsHuge());
    }
  }

  getCarsSmall() {
    return this.http.get<any>('assets/showcase/data/cars-small.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data)
      ;
  }

  getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/cars-medium.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
  }

  getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/cars-large.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
  }

  getCarsHuge() {
    return this.http.get<any>('assets/showcase/data/cars-huge.json')
      .toPromise()
      .then(res => res.data as Car[])
      .then(data => data);
  }
}
