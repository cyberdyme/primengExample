import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitesHeaderComponent } from './invites-header.component';

describe('InvitesHeaderComponent', () => {
  let component: InvitesHeaderComponent;
  let fixture: ComponentFixture<InvitesHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitesHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
