import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  st_id: string;
  year: number;
  branch: string;
  faculty: string;
}

interface Course {
  course_code: string;
  course_name: string;
  name: { name: string }[];
}

@Component({
  selector: 'app-open-a-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './open-a-course.html',
  styleUrl: './open-a-course.css'
})
export class OpenACourse {
currentDate: string = new Date().toLocaleDateString('th-TH', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  isReadonly: boolean = true;

  data = {
    course: [
      { 
        course_code: '', 
        course_name: '', 
        name: [{ name: '' }] 
      }
    ],
    student: [
      { name: '', st_id: '', year: 1, branch: '', faculty: '' } as Student
    ],
    phone: '',
    education: '',
    program_level: '',
    comment: '',
    term: '',
    academic_year: '',
    reason: '',
    other: '',
    current_credit: 0,
    new_credit: 0
  };

  constructor() {}

  onCourseCodeChange(code: string) {
    // Mock lookup: ถ้ารหัสคือ "EE101"
    if (code === 'EE101') {
      this.data.course[0].course_name = 'วิศวกรรมไฟฟ้าเบื้องต้น';
      this.data.course[0].name[0].name = 'อ. สมชาย';
    } else {
      this.data.course[0].course_name = '';
      this.data.course[0].name[0].name = '';
    }
  }

  onCourseNameChange(name: string) {
    // สามารถเขียน logic อัตโนมัติหรือเชื่อม backend
    console.log('Course Name Changed:', name);
  }

  updateNewCredit() {
    // ตัวอย่าง: new_credit = current_credit + หน่วยกิตของวิชาใหม่ (mock 3)
    this.data.new_credit = Number(this.data.current_credit) + 3;
  }

  onSubmit() {
    console.log('Form Data:', this.data);
    alert('ส่งคำร้องเรียบร้อยแล้ว!');
    // ที่นี่สามารถส่งไป backend ผ่าน HTTP POST
  }
}
