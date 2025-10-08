import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Staff {
  name: string;
  position: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-staffs-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './staffs-data.html',
  styleUrl: './staffs-data.css'
})
export class StaffsData {
  showModal = false;
  showEditModal = false;

  staffList: any[] = [
    { name: 'John Doe', position: 'Manager', email: 'john@example.com', phone: '123456789' },
    { name: 'Jane Smith', position: 'Staff', email: 'jane@example.com', phone: '987654321' }
  ];

  newStaff = { name: '', position: '', email: '', phone: '' };
  editStaff = { name: '', position: '', email: '', phone: '' };
  editIndex: number | null = null;

  // ---------- Add ----------
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newStaff = { name: '', position: '', email: '', phone: '' };
  }

  addStaff() {
    this.staffList.push({ ...this.newStaff });
    this.closeModal();
  }

  // ---------- Edit ----------
  openEditModal(index: number) {
    this.editIndex = index;
    this.editStaff = { ...this.staffList[index] };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editStaff = { name: '', position: '', email: '', phone: '' };
    this.editIndex = null;
  }

  updateStaff() {
    if (this.editIndex !== null) {
      this.staffList[this.editIndex] = { ...this.editStaff };
      this.closeEditModal();
    }
  }

  // ---------- Delete ----------
  deleteStaff(index: number) {
    this.staffList.splice(index, 1);
  }
}
