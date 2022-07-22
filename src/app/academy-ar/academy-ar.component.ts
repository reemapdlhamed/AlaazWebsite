import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

import { Courses } from './../models/courses';
@Component({
  selector: 'app-academy-ar',
  templateUrl: './academy-ar.component.html',
  styleUrls: ['./academy-ar.component.css'],
})
export class AcademyArComponent implements OnInit {
  courses :any 
  constructor(public CoursesService: CoursesService) {}

  ngOnInit(): void {

       this.CoursesService.getCourses().subscribe((res)=>{
         this.courses=res
        console.log(res);
        console.log(this.courses[0].ArCourseTitle);
        
      })
    
  }
}
