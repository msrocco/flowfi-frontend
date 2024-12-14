import { Component, OnInit } from '@angular/core';
import { LaunchScreenComponent } from '../../components/launch-screen/launch-screen.component';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [LaunchScreenComponent, CommonModule],
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
