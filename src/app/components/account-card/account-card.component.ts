import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BankAccountTypeIconComponent } from '../bank-account-type-icon/bank-account-type-icon.component';

@Component({
  selector: 'app-bank-account-card',
  templateUrl: './account-card.component.html',
  imports: [CommonModule, BankAccountTypeIconComponent],
})
export class AccountCardComponent {
  @Input() color: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() currentBalance: string = '';
  @Input() areValuesVisible: boolean = true;
}
