import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent implements OnInit {
  courses: any;
  savedId: any;
  id: any;
  constructor(
    public LessonsService: LessonsService,
    public SharedDataService: SharedDataService,
    public router: Router ,
 
  ) {}
  // submit(id: any) {
  //   this.SharedDataService.courseId = id;
  //   this.router.navigateByUrl('/lessons');
  // }
  ngOnInit(): void {
    // const id = this.SharedDataService.courseId;
    // this.LessonsService.getLessons(id).subscribe((res) => {
    //   this.courses=res
    //   console.log("courses", this.courses);
    // });
  }
}
