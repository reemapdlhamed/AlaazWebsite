import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css'],
})
export class AcademyComponent implements OnInit {
  courses: any;
  savedId: any;
  constructor(
    public CoursesService: CoursesService,
    public SharedDataService: SharedDataService,
    public router: Router,
   
  ) {}
  submit(id: any) {
    this.SharedDataService.courseId = id;
    this.router.navigateByUrl(`/lessons/${id}`);
  }
  ngOnInit(): void {
    this.CoursesService.getCourses().subscribe((res) => {
      this.courses = res;
      // console.log('courseid', this.courses[0].CourseId);
      // console.log(this.courses[0].ArCourseTitle);
    });
  }
}
