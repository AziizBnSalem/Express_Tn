import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [CommonModule, FormsModule], // Include FormsModule here
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
confirmPassword: any;
termsAccepted: any;

  onSignup() {
    console.log('Signup successful', this.name, this.email, this.password);
  }
}
