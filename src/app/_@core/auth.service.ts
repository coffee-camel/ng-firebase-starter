import { Injectable, Optional, inject } from '@angular/core';
import {
  User,
  Auth,
  authState,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  snackbar = inject(SnackbarService);
  public readonly user: Observable<User | null> = EMPTY;

  constructor(@Optional() private auth: Auth, private router: Router) {
    if (auth) {
      this.user = authState(this.auth);
    }
  }

  async signUpWithEmailPassword(
    email: string,
    password: string
  ): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.snackbar.showSuccess('Successfully signed up in!');
      this.router.navigate(['/protected']);
    } catch (error) {
      alert(error);
    }
  }

  async loginWithEmailPassword(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.snackbar.showSuccess('Successfully logged in!');
      this.router.navigate(['/protected']);
    } catch (error) {
      alert(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.snackbar.showSuccess('You have been signed out.');
      this.router.navigate(['/auth']);
    } catch (error) {
      console.error('Logout error', error);
    }
  }
}
