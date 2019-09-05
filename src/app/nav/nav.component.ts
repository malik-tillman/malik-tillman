/***************************
 * Nav Component Typescript
 * Malik Tillman 2019
 ***************************/
/**
 * Import Angular Helpers
 */
import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';

/**
 * Import Typed JS
 */
import Typed from 'typed.js';

/**
 * Import Animation Engine
 */
import anime from'animejs';

/**
 * Nav Component Decorator
 */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

/**
 * Export Nav Component Logic
 */
export class NavComponent implements AfterViewInit {
  /**
   * Document Background
   */
  public background: any;
  public backgroundColor: any;

  /**
   * Router Link Data
   */
  public navLinks = {
    home    : {
      name: 'HOME',
      href: '/',
      color: 'rgb(41,125,48)'
    },
    projects: {
      name: 'PROJECTS',
      href: '/projects',
      color: 'rgb(125,0,12)'
    },
    learn   : {
      name: 'LEARN',
      href: '#',
      color: 'rgb(147,144,0)'
    },
    about   : {
      name: 'ABOUT',
      href: '#',
      color: 'rgb(108,0,125)'
    },
    contact : {
      name: 'CONTACT',
      href: '#',
      color: 'rgb(0,90,125)'
    }
  };

  /**
   * Toggle Mobile Nav Menu
   */
  public toggle: boolean = true;

  /**
   * Typed Configuration for Search Placeholder
   */
  public typedSearchConfig = {
    strings: [
      'resume',
      'computer projects',
      'projects',
      'media projects'
    ],
    typeSpeed: 100,
    backDelay: 1000,
    backSpeed: 100,
    smartBackspace: true,
    showCursor: false,
    attr: 'placeholder',
    loop: true
  };

  /**
   * Search Icon png Source
   *
   * Todo: Convert to SVG
   */
  public searchIconSRC = 'assets/images/search_icons.png';

  /**
   * Reference to Menu Dom Element
   */
  @ViewChild('hamburgerContainer', { static: false })
  hamburger: ElementRef<HTMLElement>;

  /**
   * Get ElementRef Object for Document Background
   * @param elementRef: Angular will pass this for us
   */
  constructor(private elementRef: ElementRef) { }

  /**
   * After the View Initiates, we want to get the background from the Document
   *  and start the typed functions in the search bar
   */
  ngAfterViewInit(): void {
    this.background = this.elementRef.nativeElement.ownerDocument.body;
    this.backgroundColor = this.background.style.backgroundColor.toString();

    let typedSearch = new Typed('.search-input', this.typedSearchConfig);
    let typedMobileSearch = new Typed('.search-input-mobile', this.typedSearchConfig);
  }

  /**
   * Link Hover Enter
   *  on link hover, we change the document background color
   *
   * @param link: the link that is being hovered
   * @param setBack: for mobile we will need to set it back to the original color
   */
  linkHoverEnter(link, setBack: boolean = false) {
    /* Set background color */
    this.background.style.backgroundColor = link.color;

    /* Set background color back */
    if(setBack)
      this.linkHoverExit(setBack);
  }

  /**
   * Link Hover Exit
   *  on exiting the link hover, we set the color back to the original color
   *
   * @param delay: for mobile we will do this automatically with an exit call.
   */
  linkHoverExit(delay = false) {
    if(delay) {
      /* Close Menu */
      this.hamburgered();

      /* Localize Reference */
      let bg = this.background;
      let bgColor = this.backgroundColor;

      /* Set back after 1 second */
      setTimeout(function() {
        bg.style.backgroundColor = bgColor;
      }, 1000);
    }
    else
      /* Just set back, no delay */
      this.background.style.backgroundColor = this.backgroundColor;
  }

  /**
   * Hamburgered
   *  animation driver for showing menu when hamburger button is pressed.
   */
  hamburgered() {
    /**
     * Add grow class to hamburger container
     */
    this.hamburger.nativeElement.classList.toggle("grow");

    /**
     * Animation duration for close sign
     */
    const crossDuration = 1500;

    /**
     * Set middle bar opacity
     */
    anime({
      targets: '.bar-middle',
      duration: crossDuration,
      opacity: this.toggle ? '0' : '1'
    });

    /**
     * Rotate top bar
     */
    anime({
      targets: '.bar-top',
      translateY: this.toggle ? 9 : 0,
      rotate: this.toggle ? -45 : 0,
      duration: crossDuration
    });

    /**
     * Rotate bottom bar
     */
    anime({
      targets: '.bar-bottom',
      translateY: this.toggle ? -9 : 0,
      rotate: this.toggle ? 45 : 0,
      duration: crossDuration
    });

    /**
     * Animate width of nav container
     */
    anime({
      targets: '.nav-container-mobile',
      duration: 1500,
      easing: 'easeInOutExpo',
      translateX: this.toggle ? '0' : '-100%',

      /**
       * When this animation starts,
       *  animate the opacity of it's content
       */
      begin: () => {
        /**
         * Show or Hide contents
         */
        anime({
          targets: '.nav-element-mobile, .search-container-mobile, .nav-header',
          easing: !this.toggle ? 'easeInQuart' : 'linear',
          duration: 500,
          opacity: !this.toggle ? '1' : '0',

        });

        /**
         * Change color of menu button background
         */
        anime({
          targets: '.hamburger-container',
          duration: 1000,
          ease: 'linear',
          backgroundColor: !this.toggle ? 'rgba(0, 102, 4)' : 'rgba(255, 255, 255)'
        });
      }
    });

    /**
     * Flip toggle
     */
    this.toggle = !this.toggle;
  }
}
