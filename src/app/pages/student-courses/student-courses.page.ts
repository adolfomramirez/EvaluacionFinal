import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student, Course } from '../../interfaces/student.interface';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.page.html',
  styleUrls: ['./student-courses.page.scss'],
})
export class StudentCoursesPage implements OnInit {
  student!: Student;
  courses: Course[] = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudentById(Number(studentId)).subscribe(data => {
      console.log(data);
      this.student = data;
      this.courses = data.cursosMatriculados;
    });
  }
}
