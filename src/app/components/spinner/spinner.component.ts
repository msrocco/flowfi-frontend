import { Component, Input } from '@angular/core';
import { cn } from '../../../utils/cn.util';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
})
export class SpinnerComponent {
  @Input() className: string = '';

  get cn() {
    return cn;
  }
}
