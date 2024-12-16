import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  termsAccepted: any;

  constructor(private readonly toastr: ToastrService, private readonly router: Router) {} // Inject Router

  onSignup() {
    if (this.password === this.confirmPassword) {
      console.log('Signup successful:', this.email);
      this.toastr.success('Signup successful!', 'Welcome!');
      this.router.navigate(['/login']); // Redirect to Login page
    } else {
      this.toastr.error('Passwords do not match.', 'Error');
    }
  }
}
