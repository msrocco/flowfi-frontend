import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';

register();

@Directive({
  selector: '[swiperElement]',
})
export class SwiperDirective implements AfterViewInit, OnDestroy {
  @Input('config') config?: SwiperOptions;
  private windowWidth: number = window.innerWidth;

  constructor(private element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.updateSwiperConfig();

    //@ts-ignore
    this.element.nativeElement.initialize();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this.windowWidth = window.innerWidth;
    this.updateSwiperConfig();
  }

  private updateSwiperConfig() {
    if (this.config) {
      this.config.slidesPerView = this.windowWidth >= 500 ? 2.1 : 1.2;
      Object.assign(this.element.nativeElement, this.config);

      //@ts-ignore
      this.element.nativeElement.initialize();
    }
  }
}
