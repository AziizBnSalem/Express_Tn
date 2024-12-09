import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ToastrModule], // Add required modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
constructor(private readonly toastr: ToastrService){}
  onLogin() {
    console.log('Login successful:', this.email, this.password);
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
