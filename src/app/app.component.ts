import {Component, ElementRef, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import * as fluid from './globalFluid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'My-Site';

  @ViewChild('renderSurface', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    fluid.setFluid(this.canvas.nativeElement);
    fluid.activate();
  }

  ngOnInit(): void {
  }
}
