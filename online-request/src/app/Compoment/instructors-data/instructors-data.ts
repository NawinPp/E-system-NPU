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
  instructorList: any[] = [{ name: 'naien', position: 'dsfasd', department: 'Engineer', email: 'adsf', phone: 'dfasd' }];
  showModal = false;
  isEdit = false;

  selectedInstructor: any = { name: '', position: '', department: '', email: '', phone: '' };

  openAddModal() {
    this.isEdit = false;
    this.selectedInstructor = { name: '', position: '', department: '', email: '', phone: '' };
    this.showModal = true;
  }

  openEditModal(index: number) {
    this.isEdit = true;
    this.selectedInstructor = { ...this.instructorList[index] };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addInstructor() {
    this.instructorList.push({ ...this.selectedInstructor });
    this.closeModal();
  }

  updateInstructor() {
    const index = this.instructorList.findIndex((s) => s.email === this.selectedInstructor.email);
    if (index !== -1) {
      this.instructorList[index] = { ...this.selectedInstructor };
    }
    this.closeModal();
  }

  deleteInstructor(index: number) {
    this.instructorList.splice(index, 1);
  }
}
