import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  login() {
    Swal.fire({
      title: 'Login Successful',
      icon: 'success',
      draggable: true,
      showConfirmButton: false,
      timer: 2000
    });
    this.router.navigate(['/navbar']);
  }
}
