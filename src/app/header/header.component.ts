/*******************************
 * Header Component Typescript
 * Malik Tillman 2019
 ******************************/

/**
 * Boring old imports
 */
import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';

/**
 * Angular Component Decorator
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 * Main Logic Export
 */
export class HeaderComponent implements OnInit {
  /**
   * Typed Configuration for Name Header
   */
  private typedNameConfig: object = {
    strings: ['Malik_Tillman'],
    typeSpeed: 100,
    showCursor: false,
    loop: false
  };

  /**
   * On Init: Type out the name header.
   */
  ngOnInit(): void {
    const typedNameObj = new Typed('#name', this.typedNameConfig);
    typedNameObj.start();
  }

}
