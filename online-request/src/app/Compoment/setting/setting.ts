import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-setting',
  imports: [FormsModule, CommonModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  showEditModal = false;
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
}
