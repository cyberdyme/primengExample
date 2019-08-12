import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitesContainerComponent } from './invites-container.component';

describe('InvitesContainerComponent', () => {
  let component: InvitesContainerComponent;
  let fixture: ComponentFixture<InvitesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
