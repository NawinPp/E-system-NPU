import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition } from '@angular/animations';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
   standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  animations: [
    transition(':enter', [ // 👈 when added to the DOM
      style({ opacity: 0, transform: 'scale(0.95)' }),
      animate('150ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [ // 👈 when removed from the DOM
      animate('100ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' }))
    ])
  ]
})
export class Navbar {
  isOpen = false;
  isChatOpen = false;
  isRequestDropdownOpen = false;
  chatMessage = '';

  constructor(private router: Router) {}
  
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  toggleRequestDropdown() {
    this.isRequestDropdownOpen = !this.isRequestDropdownOpen;
  }

  sendMessage() {
    console.log('Message sent:', this.chatMessage);
    this.chatMessage = '';
  }

  openChatBox() {
    this.isChatOpen = true;
  }

  closeChatBox() {
    this.isChatOpen = false;
  }

  logout(): void {
    // 🧹 Clear user session or token
    localStorage.removeItem('token');   // or sessionStorage.removeItem('token')
    localStorage.removeItem('user');    // optional, if you store user info

    // 🔐 Optionally show a message
    Swal.fire({
      title: 'Logged Out',
      text: 'You have been successfully logged out.',
      icon: 'info',
      showConfirmButton: false,
      timer: 2000
    });

    // 🔄 Redirect to login or home page
    this.router.navigate(['/']);
  }
}
