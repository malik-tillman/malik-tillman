import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as fluid from '../globalFluid';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, AfterViewInit {
  fluidConfigs = [
    'dissipation',
    'velocity',
    'pressure',
    'curl',
    'size'
  ];

  configs : object;
  sliders : object = { };
  configText;

  @ViewChild('slider1', { static: false }) slider1Ref;
  @ViewChild('slider2', { static: false }) slider2Ref;
  @ViewChild('slider3', { static: false }) slider3Ref;
  @ViewChild('configText', { static: false }) configTextRef;

  constructor() {
    this.configs = this.getRandomConfigs();
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.sliders = {
      slider1: {
        slider: this.slider1Ref.nativeElement,
        config: this.configs[0]
      },
      slider2: {
        slider: this.slider2Ref.nativeElement,
        config: this.configs[1]
      },
      slider3: {
        slider: this.slider3Ref.nativeElement,
        config: this.configs[2]
      }
    };

    this.configText = this.configTextRef.nativeElement;
  }

  update(slider) {
    switch (slider.config) {
      case 'dissipation':
        slider.slider.max = 1;
        slider.slider.step = .001;
        slider.slider.min = .9;
        fluid.mapBehaviors({
          dissipation: slider.slider.value
        });
        break;

      case 'velocity':
        slider.slider.max = 1;
        slider.slider.step = .001;
        slider.slider.min = .7;
        fluid.mapBehaviors({
          velocity: slider.slider.value
        });
        break;

      case 'pressure':
        slider.slider.max = 1;
        slider.slider.step = .001;
        slider.slider.min = .7;
        fluid.mapBehaviors({
          pressure: slider.slider.value
        });
        break;

      case 'curl':
        slider.slider.max = 50;
        slider.slider.min = 0;
        fluid.mapBehaviors({
          curl: slider.slider.value
        });
        break;

      case 'size':
        slider.slider.max = 1;
        slider.slider.step = .01;
        slider.slider.min = .1;
        fluid.mapBehaviors({
          emitter_size: slider.slider.value
        });
        break;
    }
  }

  showConfig(slider) {
    this.configText.innerHTML = slider.config + ' ' + slider.slider.value;

    this.configText.style.setProperty('color', 'rgba(100%, 100%, 100%, .3)');

    let x = this.configText;

    setTimeout(function() {
      x.style.setProperty('color', 'rgba(100%, 100%, 100%, 0)');
    }, 1000);
  }

  /**
   * Returns an array of random configs to map to tuners
   */
  getRandomConfigs() {
    const randomConfigs = [];

    while (randomConfigs.length < 3) {
      const randIndex = Math.floor(Math.random() * (this.fluidConfigs.length));

      if (randomConfigs.indexOf(this.fluidConfigs[randIndex]) === -1) {
        randomConfigs.push(this.fluidConfigs[randIndex]);
      }
    }

    return randomConfigs;
  }
}
