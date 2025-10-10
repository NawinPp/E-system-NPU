import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  imports: [FormsModule, CommonModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  showEditModal = false;

  student = {
    name: 'John Doe',
    studentId: '12345678',
    major: 'Computer Science',
    faculty: 'Engineering',
    year: 3,
    gpa: 3.85,
    adviser: 'Dr. Smith',
    email: 'john.doe@email.com',
    photo: 'https://via.placeholder.com/150' // default image
  };

  editData = { ...this.student };
  selectedPhoto: any = null; // สำหรับ preview

  openEditModal() {
    this.editData = { ...this.student };
    this.selectedPhoto = null;
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhoto = URL.createObjectURL(file);
    }
  }

  update() {
    this.student = { ...this.editData };
    if (this.selectedPhoto) {
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
        timer: 2000,
        showConfirmButton: false
      });
      this.student.photo = this.selectedPhoto;
    }
    this.closeEditModal();
  }
}
