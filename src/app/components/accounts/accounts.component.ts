import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../directives/swiper.directive';

interface Account {
  id: string;
  name: string;
  initialBalance: number;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
  color: string;
  currentBalance: number;
}

@Component({
  selector: 'app-accounts',
  standalone: true,
  templateUrl: './accounts.component.html',
  imports: [CommonModule, SpinnerComponent, SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountsComponent implements OnInit, AfterViewInit {
  areValuesVisible = true;
  isLoading = false;
  accounts: Account[] = [];
  currentBalance = 12345.67;

  swiper?: Swiper;
  @ViewChild('swiperRef') swiperRef: ElementRef | undefined;

  ngOnInit() {
    this.isLoading = true;

    setTimeout(() => {
      this.accounts = [
        {
          id: '1',
          name: 'Checking Account',
          initialBalance: 1000,
          type: 'CHECKING',
          color: '#008080',
          currentBalance: 5000,
        },
        {
          id: '2',
          name: 'Savings',
          initialBalance: 500,
          type: 'CHECKING',
          color: '#FFA500',
          currentBalance: 10000,
        },
        {
          id: '3',
          name: 'Investiment Account',
          initialBalance: 500,
          type: 'INVESTMENT',
          color: '#FFA500',
          currentBalance: 10000,
        },
        {
          id: '4',
          name: 'Investiment Account',
          initialBalance: 500,
          type: 'INVESTMENT',
          color: '#FFA500',
          currentBalance: 10000,
        },
        {
          id: '5',
          name: 'Investiment Account',
          initialBalance: 500,
          type: 'INVESTMENT',
          color: '#FFA500',
          currentBalance: 10000,
        },
      ];
      this.isLoading = false;
    }, 1000);
  }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  toggleValuesVisibility() {
    this.areValuesVisible = !this.areValuesVisible;
  }

  openNewAccountModal() {}

  formatCurrency(value: number) {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
    }).format(value);
  }

  public config: SwiperOptions = {
    slidesPerView: window.innerWidth >= 500 ? 2.1 : 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  };
}
