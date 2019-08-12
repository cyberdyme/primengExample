import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

import { AccordionModule, OrderListModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { InvitesHeaderComponent } from './invites-header/invites-header.component';
import { InvitesGridComponent } from './invites-grid/invites-grid.component';
import { InvitesContainerComponent } from './invites-container/invites-container.component';


@NgModule({
  declarations: [
    AppComponent,
    InvitesHeaderComponent,
    InvitesGridComponent,
    InvitesContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    RadioButtonModule,
    ButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrderListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
