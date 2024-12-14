import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { cn } from '../../../utils/cn.util';

@Component({
  selector: 'app-button',
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() className: string = '';
  @Input() isLoading = false;
  @Input() disabled = false;
  @Input() variant: 'danger' | 'ghost' | null = null;

  get cn() {
    return cn;
  }
}
