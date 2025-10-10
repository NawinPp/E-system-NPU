import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

interface Student {
  name: string;
  st_id: string;
  year: number;
  branch: string;
  faculty: string;
}

interface CourseRow {
  course_code: string;
  course_name: string;
  group: string;
  credit: number;
}

@Component({
  selector: 'app-add-drop-a-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-drop-a-course.html',
  styleUrl: './add-drop-a-course.css'
})
export class AddDropACourse {
currentDate: string = new Date().toLocaleDateString('th-TH', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  data = {
    term: '',
    academic_year: '',
    dean: '',
    students: [
      {
        name: '',
        st_id: '',
        year: 1,
        branch: '',
        faculty: ''
      } as Student
    ],
    program_level: '',
    have_a_wish: '',
    current_credit: 0,
    comment: ''
  };

  rows: CourseRow[] = [
    { course_code: '', course_name: '', group: '', credit: 0 }
  ];

  constructor() {}

  addRow() {
    this.rows.push({ course_code: '', course_name: '', group: '', credit: 0 });
  }

  // ตัวอย่าง: เมื่อกรอกรหัสวิชา ให้ดึงชื่อและหน่วยกิต (mock)
  onCourseCodeChange(index: number) {
    const row = this.rows[index];
    // ตัวอย่าง mock: ถ้ารหัสคือ "EE101"
    if (row.course_code === 'EE101') {
      row.course_name = 'วิศวกรรมไฟฟ้าเบื้องต้น';
      row.group = 'A';
      row.credit = 3;
    } else {
      row.course_name = '';
      row.group = '';
      row.credit = 0;
    }

    // อัปเดตรวมหน่วยกิต
    this.updateTotalCredit();
  }

  updateTotalCredit() {
    const total = this.rows.reduce((sum, r) => sum + r.credit, 0);
    this.data.current_credit = total;
  }

  onSubmit() {
    console.log('Form Data:', this.data);
    console.log('Course Rows:', this.rows);

    Swal.fire({
      icon: 'success',
      title: 'ส่งคำร้องสำเร็จ',
      text: 'คำร้องของคุณถูกส่งเรียบร้อยแล้ว',
      confirmButtonText: 'ตกลง'
    });
    
    // ที่นี่สามารถส่งไป backend ผ่าน HTTP POST
  }
}
