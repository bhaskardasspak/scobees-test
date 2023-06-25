import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: ` <div class="welcome">Welcome back, {{ name }}</div> `,
  styles: ['.welcome {color: #1F838E; font-weight: 600; font-size: 1.2rem;}'],
})
export class WelcomeComponent {
  public name = 'Bhaskar';
}
