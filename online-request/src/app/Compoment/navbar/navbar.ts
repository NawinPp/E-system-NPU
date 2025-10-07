import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
}
