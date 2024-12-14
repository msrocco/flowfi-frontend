import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthLayoutComponent } from '../../components/auth-layout/auth-layout.component';
import { Router } from '@angular/router';
import { InputComponent } from '../../components/input/input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

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
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  isLoading = false;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  handleSubmit() {
    console.log('submit');
  }

  navigate() {
    this.router.navigate(['register']);
  }
}
