/****************************************
 * Main Application Component Typescript
 * Malik Tillman 2019
 ****************************************/

/**
 * Import Angular Helper
 */
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

/**
 * Import Routing Callbacks
 */
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

/**
 * Import Loading Bar Service
 */
import { LoadingBarService } from '@ngx-loading-bar/core';

/**
 * Import global fluid object
 */
import * as fluid from './globalFluid';

/**
 * Main App Component Decorator
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**
 * Export Main App Component Logic
 */
export class AppComponent implements AfterViewInit {
  /**
   * Canvas used as a render surface for FluidJS
   */
  @ViewChild('renderSurface', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;

  /**
   * Footer will change color on loading
   */
  @ViewChild('footer', { static: false })
  footer: ElementRef<HTMLElement>;

  /**
   * Import dependencies and subscribe to routing service
   *
   * @param loadingBar: Our ngx-loading bar
   * @param router: The router object to subscribe to
   */
  constructor(
    private loadingBar: LoadingBarService,
    private router: Router
  ) {
    /* Subscribe to routing service */
    this.router.events.subscribe(async (event) => {
      /* Determine Loading Bar State */
      switch (true) {
        /* Start Loading */
        case event instanceof NavigationStart:
          this.footer.nativeElement.style.backgroundColor = 'rgb(115, 9, 0)';
          this.loadingBar.start();
          break;

        /* End Loading */
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          await this.sleep(2000);
          this.loadingBar.complete();

          await this.sleep(500);
          this.footer.nativeElement.style.backgroundColor = 'rgb(0, 102, 4)';
      }
    })
  }

  /**
   * Activate FluidJS after view has initiated for some time
   */
  async ngAfterViewInit(): Promise<void> {
    await this.sleep(2000);
    fluid.setFluid(this.canvas.nativeElement);
    fluid.activate();
  }

  /**
   * Async Sleep Function
   *  Sleeps operations for a given time
   *
   * @param ms: Amount of time should sleep for.
   */
  async sleep(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
