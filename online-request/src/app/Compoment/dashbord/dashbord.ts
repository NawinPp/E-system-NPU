import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  deleteRequest(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this request?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.requests.splice(index, 1);
        Swal.fire({
          title: 'Deleted!',
          text: 'The request has been deleted.',
          icon: 'success',
          showCancelButton: false,
          timer: 1500
        });
      }
    });
  }

  confirmDelete(index: number) {
    this.requests.splice(index, 1);
  }
}