import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '_@shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `<app-header></app-header><router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'ng-firebase-starter';
}
