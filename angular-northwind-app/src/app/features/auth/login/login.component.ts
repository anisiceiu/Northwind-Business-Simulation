import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedImports } from '../../../shared/shared.imports';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, LoginRequest } from './services/auth.service';

@Component({
  selector: 'app-login',
  imports: [SharedImports],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
   constructor(private authService: AuthService) {}

form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const credentials: LoginRequest = {
      email: this.form.controls['email'].value,
      password:  this.form.controls['password'].value,
    };

    this.authService.login(credentials).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('token', res.token); // save token
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
    }
  }
  @Input()
  error!: string | null;


}
