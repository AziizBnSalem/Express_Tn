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

  constructor(private readonly toastr: ToastrService, private readonly router: Router) {} // Inject Router

  onLogin() {
    console.log('Login successful:', this.email, this.password);
    this.toastr.success('Login successful!', 'Welcome!');
    this.router.navigate(['/home']); // Redirect to Home page
  }
}
