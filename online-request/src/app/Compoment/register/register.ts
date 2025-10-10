import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  selectedRole: string = '';

  constructor(private router: Router) {}

  register() {
    Swal.fire({
      title: 'Registration Successful',
      icon: 'success',
      draggable: true,
    });
    this.router.navigate(['/']);
  }
}
