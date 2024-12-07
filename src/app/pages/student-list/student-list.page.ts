import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      console.log(data); 
      this.students = data;
    });
  }

  viewCourses(studentId: number) {
    this.router.navigate(['/student-courses', studentId]);
  }
}
