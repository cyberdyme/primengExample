import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-invites-header',
  templateUrl: './invites-header.component.html',
  styleUrls: ['./invites-header.component.css']
})
export class InvitesHeaderComponent implements OnInit {

  @Output() selectionChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelectionChanged(selection: string) {
    this.selectionChanged.emit(selection);
  }
}
