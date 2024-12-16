import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private readonly toastr: ToastrService, private readonly router: Router) {}

  onLogin() {
    // Mock role-based login functionality
    if (this.email === 'aziz' && this.password === 'aziz') {
      this.toastr.success('Login successful!', 'Welcome Delivery User!');
      this.router.navigate(['/home']);
    } else if (this.email === 'admin' && this.password === 'admin') {
      this.toastr.success('Login successful!', 'Welcome Admin!');
      this.router.navigate(['/admin']);
    } else {
      this.toastr.error('Invalid email or password!', 'Login Failed');
    }
  }
}
