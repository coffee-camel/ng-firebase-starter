import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatCardModule, MatTabsModule, LoginComponent, SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  authMethodIndex: number = 0; // 0: login, 1: signup, 2: link
}
