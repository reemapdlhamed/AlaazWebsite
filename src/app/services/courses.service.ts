import { Injectable } from '@angular/core';
import { Courses } from '../models/courses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private http: HttpClient) {}
  public getCourses() {
    return this.http.get<Courses>(
      ' http://projectegy-002-site6.gtempurl.com//api/WebSiteCourses'
    );
  }
 
}
