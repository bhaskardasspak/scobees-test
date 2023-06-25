import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './common/welcome/welcome.component';
import { CardComponent } from './common/card/card.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { FeedComponent } from './components/feed/feed.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
// Material Components
@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, CardComponent, TabsComponent, FeedComponent, FooterNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
