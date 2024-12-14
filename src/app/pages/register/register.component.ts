import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';

interface RegisterForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-register',
  imports: [
    AuthLayoutComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;
  isLoading = false;

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  handleSubmit() {
    this.isLoading = true;

    this.authService
      .register(
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.password
      )
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
