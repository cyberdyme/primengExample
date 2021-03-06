import { Component, OnInit, Input } from '@angular/core';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

@Component({
  selector: 'app-invites-grid',
  templateUrl: './invites-grid.component.html',
  styleUrls: ['./invites-grid.component.css']
})
export class InvitesGridComponent implements OnInit {
  cols: any[];
  @Input() value: Car[];

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      {field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }
}
