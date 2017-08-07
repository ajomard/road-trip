import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule, MdSidenavModule, MdButtonModule, MdToolbarModule, MdListModule  } from '@angular/material';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailedDayComponent } from './detailed-day/detailed-day.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    DetailedDayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdSidenavModule,
    MdButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MdToolbarModule,
    MdListModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: WelcomeComponent
      },
      {
        path: 'detail/:id',
        component: DetailedDayComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
