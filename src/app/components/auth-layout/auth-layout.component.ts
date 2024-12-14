import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() disablePrimaryBtn: boolean = true;
  @Output('submit') onSubmit = new EventEmitter();

  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
