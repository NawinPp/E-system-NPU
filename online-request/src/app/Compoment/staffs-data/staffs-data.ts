import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staffs-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './staffs-data.html',
  styleUrl: './staffs-data.css',
})
export class StaffsData {
  staffList: any[] = [{ name: 'naien', position: 'dsfasd', email: 'adsf', phone: 'dfasd' }];
  showModal = false;
  isEdit = false;

  selectedStaff: any = { name: '', position: '', email: '', phone: '' };

  openAddModal() {
    this.isEdit = false;
    this.selectedStaff = { name: '', position: '', email: '', phone: '' };
    this.showModal = true;
  }

  openEditModal(index: number) {
    this.isEdit = true;
    this.selectedStaff = { ...this.staffList[index] };
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addStaff() {
    this.staffList.push({ ...this.selectedStaff });
    this.closeModal();
  }

  updateStaff() {
    const index = this.staffList.findIndex((s) => s.email === this.selectedStaff.email);
    if (index !== -1) {
      this.staffList[index] = { ...this.selectedStaff };
    }
    this.closeModal();
  }

  deleteStaff(index: number) {
    this.staffList.splice(index, 1);
  }
}
