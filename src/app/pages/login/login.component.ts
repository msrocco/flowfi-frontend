import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';

interface LoginForm {
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  imports: [
    AuthLayoutComponent,
    InputComponent,
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  isLoading = false;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
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
      .signin(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
