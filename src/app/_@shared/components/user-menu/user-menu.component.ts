import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { Router } from '@angular/router';
import { AuthService } from '_@core/auth.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  async logout() {
    await this.authService.logout();
  }
}
