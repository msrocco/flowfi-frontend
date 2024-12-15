import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-menu',
  imports: [MenuModule],
  templateUrl: './user-menu.component.html',
})
export class UserMenuComponent implements OnInit {
  userInitials: string = '';
  menuItems: MenuItem[] = [];

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const user = this.userService.getUser();

    if (user) {
      this.userInitials = user.name?.slice(0, 2).toUpperCase() || '';
      this.menuItems = [
        {
          label: 'Log out',
          icon: 'pi pi-sign-out',
          command: () => this.authService.logout(),
        },
      ];
    }
  }
}
