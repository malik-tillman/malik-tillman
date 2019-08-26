import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import Typed from 'typed.js';
import anime from'animejs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit, AfterViewInit {
  public background: any;
  public backgroundColor: any;
  public toggle: boolean = true;
  public navLinks = {
    home    : {
      name: 'HOME',
      href: '#',
      color: 'rgb(41,125,48)'
    },
    projects: {
      name: 'PROJECTS',
      href: '#',
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

  @ViewChild('hamburger', { static: false })
  hamburger: ElementRef<HTMLCanvasElement>;


  @ViewChild('nav', { static: false })
  nav: ElementRef<HTMLCanvasElement>;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.background = this.elementRef.nativeElement.ownerDocument.body;
    this.backgroundColor = this.background.style.backgroundColor.toString();

    let typedSearch = new Typed('.search-input', this.typedSearchConfig);
    let typedMobileSearch = new Typed('.search-input-mobile', this.typedSearchConfig);

    this.hamburgered();
  }

  linkHoverEnter(object) {
    this.background.style.backgroundColor = object.color;
  }

  linkHoverExit() {
    this.background.style.backgroundColor = this.backgroundColor;
  }

  hamburgered() {
    const menuDur = 500;

    /* Set Color */
    // anime({
    //   targets: '.bar1, .bar2, .bar3, .bar4',
    //   duration: 300,
    //   backgroundColor: this.toggle ? '#000000' : '#ffffff',
    //   easing: 'easeInOutQuad'
    // });

    /* Middle Bar Opacity */
    anime({
      targets: '.bar2, .bar3',
      duration: 500,
      opacity: this.toggle ? '0' : '1'
    });

    /* Close Animation */
    anime({
      targets: '.bar1',
      translateY: this.toggle ? 9 : 0,
      rotate: this.toggle ? -45 : 0,
      duration: menuDur
    });

    anime({
      targets: '.bar4',
      translateY: this.toggle ? -9 : 0,
      rotate: this.toggle ? 45 : 0,
      duration: menuDur
    });

    /* Animate Height of Nav container */
    anime({
      targets: '.nav-element-mobile',
      opacity: this.toggle ? '1' : '0'
    });

    anime({
      targets: '.nav-container-mobile',
      height: this.toggle ? '80vh' : '0'
    });



    this.toggle = !this.toggle;
  }
}
