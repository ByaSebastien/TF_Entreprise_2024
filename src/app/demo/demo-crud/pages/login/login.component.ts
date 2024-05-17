import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginForm } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true })
  });

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
  }

  onSubmit() {
    this.form.markAllAsTouched

    if (!this.form.valid) {
      return;
    }
    console.log(this.form.value);
    this._authService.login({
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    }).subscribe({
      next: (data) => {
        console.log(data);
        this._router.navigate(['/demo/movies'])
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
