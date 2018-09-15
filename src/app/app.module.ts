import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SliderComponent } from './slider/slider.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { HowWeAreWorkingComponent } from './how-we-are-working/how-we-are-working.component';
import { FeedbackCustomersComponent } from './feedback-customers/feedback-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    SliderComponent,
    MainHeadingComponent,
    HowWeAreWorkingComponent,
    FeedbackCustomersComponent,

  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
