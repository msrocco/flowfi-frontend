import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() className: string = '';
}
