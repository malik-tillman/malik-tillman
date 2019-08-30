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
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * Export Application Module
 */
export class AppModule { }
