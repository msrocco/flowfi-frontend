import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bank-account-type-icon',
  template: `
    <div>
      <img [src]="getIconPath(type)" alt="Bank account type" />
    </div>
  `,
})
export class BankAccountTypeIconComponent {
  @Input() type: string = '';

  getIconPath(type: string): string {
    switch (type) {
      case 'CASH':
        return '/svg/cash.svg';
      case 'CHECKING':
        return '/svg/checking.svg';
      default:
        return '/svg/investment.svg';
    }
  }
}
