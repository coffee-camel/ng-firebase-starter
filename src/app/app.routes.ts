import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProtectedComponent } from './protected/protected.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  { path: 'auth', component: AuthComponent },
  { path: 'protected', component: ProtectedComponent },
];
