import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://landscapes-room-duncan-provide.trycloudflare.com/estudiantes';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }
}
