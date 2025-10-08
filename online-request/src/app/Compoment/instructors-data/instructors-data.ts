import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructors-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './instructors-data.html',
  styleUrl: './instructors-data.css',
})
export class InstructorsData {
  showModal = false;
  showEditModal = false;

  instructorList: any[] = [
    { name: 'John Doe', position: 'Manager', department: 'Engineer', email: 'john@example.com', phone: '123456789' },
    { name: 'Jane Smith', position: 'Staff', department: 'Engineer', email: 'jane@example.com', phone: '987654321' },
  ];

  newInstructor = { name: '', position: '', department: '', email: '', phone: '' };
  editInstructor = { name: '', position: '', department: '', email: '', phone: '' };
  editIndex: number | null = null;

  // ---------- Add ----------
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.newInstructor = { name: '', position: '', department: '', email: '', phone: '' };
  }

  addInstructor() {
    this.instructorList.push({ ...this.newInstructor });
    this.closeModal();
  }

  // ---------- Edit ----------
  openEditModal(index: number) {
    this.editIndex = index;
    this.editInstructor = { ...this.instructorList[index] };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editInstructor = { name: '', position: '', department: '', email: '', phone: '' };
    this.editIndex = null;
  }

  updateInstructor() {
    if (this.editIndex !== null) {
      this.instructorList[this.editIndex] = { ...this.editInstructor };
      this.closeEditModal();
    }
  }

  // ---------- Delete ----------
  deleteInstructor(index: number) {
    this.instructorList.splice(index, 1);
  }
}
