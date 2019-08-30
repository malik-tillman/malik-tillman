import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  randomFactsTypedConfig = {
    strings: [
      'This site was designed and developed by Malik Tillman',
      'Pause this fluid with the P key'
    ],
    typeSpeed: 25,
    backSpeed: 50,
    backDelay: 10000,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '',
    autoInsertCss: true,
    loop: true
  };


  constructor() {
  }

  ngOnInit() {
    const typedName = new Typed('.random-facts', this.randomFactsTypedConfig);
    typedName.start();
  }

}
