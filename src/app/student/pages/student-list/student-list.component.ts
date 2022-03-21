import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;
  columnsToDisplay = ['id', 'firstName', 'lastName', 'actions'];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.students$ = this._studentService.getStudents();
  }

  deleteStudent(id: number) {
    this._studentService.deleteStudent(id).subscribe(() => {
      this.students$ = this._studentService.getStudents();
    });
  }

}
