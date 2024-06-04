import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  show(message: string, action: string = '', duration: number = 7000): void {
    this.snackBar.open(message, action, {
      duration,
    });
  }

  showError(message: string, duration: number = 7000): void {
    this.snackBar.open(message, 'Close', {
      duration,
      panelClass: ['error-snackbar'],
    });
  }

  showSuccess(message: string, duration: number = 7000): void {
    this.snackBar.open(message, 'Close', {
      duration,
      panelClass: ['success-snackbar'],
    });
  }
}
