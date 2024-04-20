import { CommonModule } from '@angular/common';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    RouterLink,
  ],
  templateUrl: './login-page.component.html',
  styles: `
    :host {
      display: block;
    }
    .form-card{
      background-color: #262e3a;
    }
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {}
