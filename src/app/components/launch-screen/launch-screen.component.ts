import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-launch-screen',
  imports: [LogoComponent, SpinnerComponent, CommonModule],
  templateUrl: './launch-screen.component.html',
})
export class LaunchScreenComponent {}
