/************************************
 * Main Application Module
 * Generated by: Angular CLI
 * Maintained by: Malik Tillman 2019
 ************************************/

/**
 * Angular Helper Module
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {HashLocationStrategy, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

/**
 * Application Components
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { LearnComponent } from './learn/learn.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

/**
 * NGX Loading Bar
 */
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

/**
 * Angular Module Decorator
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    ProjectsComponent,
    LearnComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})

/**
 * Export Application Module
 */
export class AppModule { }
