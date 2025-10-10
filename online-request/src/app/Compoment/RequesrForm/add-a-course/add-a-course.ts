import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import html2pdf from 'html2pdf.js';
import Swal from 'sweetalert2';

interface Course {
  course_code: string;
  course_name: string;
  credit: number;
}

interface Student {
  name: string;
  st_id: string;
  year: number;
  branch: string;
  faculty: string;
}

interface FormData {
  students: Student[];
  phone: string;
  education: string;
  group: string;
  program_level: string;
  other?: string;
  term: string;
  academic_year: string;
  reason: string;
  current_credit: number;
  total_credit: number;
}

@Component({
  selector: 'app-add-a-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-a-course.html',
  styleUrl: './add-a-course.css'
})
export class AddACourse implements OnInit {
  @ViewChild('formContent', { static: false }) formContent!: ElementRef;

  // currentDate = new Date().toLocaleDateString('th-TH');
  currentDate: string = new Date().toLocaleDateString('th-TH', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
  formData: FormData = {
    students: [{
      name: '',
      st_id: '',
      year: 1,
      branch: '',
      faculty: 'วิศวกรรมศาสตร์'
    }],
    phone: '',
    education: '',
    group: '',
    program_level: '',
    other: '',
    term: '',
    academic_year: '',
    reason: '',
    current_credit: 0,
    total_credit: 0
  };

  rows: Course[] = [
    { course_code: '', course_name: '', credit: 0 }
  ];

  constructor() {}

  ngOnInit(): void {}

  // Add a new empty row to the table
  addRow(): void {
    this.rows.push({ course_code: '', course_name: '', credit: 0 });
  }

  // Handle when a course code is entered
  onCourseCodeChange(index: number): void {
    const course = this.rows[index];

    // Example: lookup course info from a predefined list or API
    const courseDatabase: { [key: string]: { name: string; credit: number } } = {
      'ENG101': { name: 'วิศวกรรมพื้นฐาน', credit: 3 },
      'ENG102': { name: 'คณิตศาสตร์วิศวกรรม', credit: 3 },
      'ENG103': { name: 'ฟิสิกส์วิศวกรรม', credit: 4 }
    };

    if (course.course_code in courseDatabase) {
      course.course_name = courseDatabase[course.course_code].name;
      course.credit = courseDatabase[course.course_code].credit;
    } else {
      course.course_name = '';
      course.credit = 0;
    }

    this.calculateTotalCredit();
  }

  // Calculate the total credits from all rows
  calculateTotalCredit(): void {
    this.formData.total_credit = this.rows.reduce((sum, row) => sum + row.credit, 0);
  }

  // Submit the form
  onSubmit(): void {
    console.log('Form Submitted:', this.formData, this.rows);

    // Example: send data to backend API
    // this.http.post('/api/course-request', { formData: this.formData, courses: this.rows })
    //   .subscribe(response => console.log(response));
    
    Swal.fire({
      icon: 'success',
      title: 'ส่งคำร้องสำเร็จ',
      text: 'คำร้องของคุณถูกส่งเรียบร้อยแล้ว',
      confirmButtonText: 'ตกลง'
    });
  }

  
  exportPDF() {
    const element = this.formContent.nativeElement;
    const options: any = {
      margin: 0.5,
      filename: 'course-request.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };
    html2pdf().from(element).set(options).save();
  }
}
