import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  private aosInstance: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        offset: 200,
        delay: 0,
        duration: 600,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
      });
      console.log('AOS initialized');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.refresh();
    }
  }
}
