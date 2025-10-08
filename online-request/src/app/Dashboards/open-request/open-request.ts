import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Request {
  id: string;
  name: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-open-request',
  imports: [CommonModule, FormsModule],
  templateUrl: './open-request.html',
  styleUrl: './open-request.css',
})
export class OpenRequest {
  requests: Request[] = [
    { id: 'NPU.R10', name: 'John Doe', date: '2024-06-10', status: 'Pending' },
    { id: 'NPU.R11', name: 'Jane Smith', date: '2024-06-10', status: 'Approved' },
    { id: 'NPU.R12', name: 'Bob Brown', date: '2024-06-10', status: 'Rejected' },
  ];
}
