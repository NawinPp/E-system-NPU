import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Request {
  id: string;
  name: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-dashbord',
  imports: [FormsModule, CommonModule],
  templateUrl: './dashbord.html',
  styleUrl: './dashbord.css',
})
export class Dashbord {
  requests: Request[] = [
    { id: 'NPU.R10', name: 'John Doe', date: '2024-06-10', status: 'Pending' },
    { id: 'NPU.R11', name: 'Jane Smith', date: '2024-06-10', status: 'Approved' },
    { id: 'NPU.R12', name: 'Bob Brown', date: '2024-06-10', status: 'Rejected' },
  ];
}
