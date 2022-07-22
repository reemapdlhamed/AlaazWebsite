import { Injectable } from '@angular/core';
import { Lessons } from '../models/lessons';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LessonsService {

constructor(private http: HttpClient) {}
public getLessons (id: any){
  return this .http.get<Lessons>(` http://projectegy-002-site6.gtempurl.com/api/WebSiteLessons?courseId=${id}`)
}
}
