import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitesGridComponent } from './invites-grid.component';

describe('InvitesGridComponent', () => {
  let component: InvitesGridComponent;
  let fixture: ComponentFixture<InvitesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
