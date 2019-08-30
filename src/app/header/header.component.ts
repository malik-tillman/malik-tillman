/*******************************
 * Header Component Typescript
 * Malik Tillman 2019
 ******************************/
/**
 * Angular Helpers
 */
import {Component, OnInit} from '@angular/core';

/**
 * Typed JS
 */
import Typed from 'typed.js';

/**
 * Angular Header Component Decorator
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 * Export Main Component Logic
 */
export class HeaderComponent implements OnInit {
  /**
   * Typed Configuration for Name Header
   */
  private typedNameConfig: object = {
    strings: [ 'Malik_Tillman' ],
    typeSpeed: 100,
    startDelay: 1000,
    showCursor: false,
    loop: false,

    /* On Complete type out tag-line */
    onComplete: () => {
      let typedTagLineObj = new Typed('#tag-line', this.typedTagLineConfig);
      typedTagLineObj.start();
    }
  };

  /**
   * Tag-line placed under name
   */
  private tagLine: string = 'Make It Happen';

  /**
   * Typed Configuration for Tag-Line
   */
  private typedTagLineConfig: object = {
    strings: [ this.tagLine ],
    typeSpeed: 50,
    startDelay: 500,
    showCursor: false,
    loop: false
  };

  /**
   * On Init: Type out the name and tag line in the header.
   */
  ngOnInit(): void {
    const typedNameObj = new Typed('#name', this.typedNameConfig);
    typedNameObj.start();
  }

}
