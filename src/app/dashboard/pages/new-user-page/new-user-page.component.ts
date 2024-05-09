import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators as valid,
} from '@angular/forms';
import { PrimeNgModule } from '../../../primeNg/primeNG.module';

@Component({
  selector: 'app-new-user-page',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  templateUrl: './new-user-page.component.html',
  styles: `
    .container{
    height:600px;
   }
   form{
   }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewUserPageComponent {
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: ['', [valid.required]],
    email: ['', [valid.required]],
    password: ['', [valid.required, valid.minLength(6)]],
    address: ['', [valid.required]],
    phone_number: ['', [valid.required]],
  });

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
