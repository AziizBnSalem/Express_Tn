import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,ToastrModule], // Add required modules
  
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
 // Include FormsModule here
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
