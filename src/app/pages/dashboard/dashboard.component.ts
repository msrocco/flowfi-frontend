import { Component, OnInit } from '@angular/core';
import { LaunchScreenComponent } from '../../components/launch-screen/launch-screen.component';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { AccountsComponent } from '../../components/accounts/accounts.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    LaunchScreenComponent,
    LogoComponent,
    CommonModule,
    ButtonModule,
    UserMenuComponent,
    AccountsComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  isLoading = true;
  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.isLoading$.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );

    this.userService.getMe().subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }
}
