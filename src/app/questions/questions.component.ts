import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  isShown: boolean = false;
  quiz: any;
  savedAnswers: any = [];
  constructor(
    private apiService: ApiService,
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}
  toggle() {
    this.isShown = !this.isShown;
    console.log(this.isShown);
  }
  saveAnswers(index: any, value: any) {
    this.savedAnswers[index] = value;
  }
  submit(value: any) {
    let ansArr = [];
    for (let v of Object.values(value)) {
      ansArr.push(v);
    }

    // this.sharedDataService.updateAnswersIds(ansArr);
    this.router.navigateByUrl('result');
  }
  ngOnInit(): void {
    this.apiService.getQuizById(1).subscribe((res) => {
      this.quiz = res;
      console.log(res);
    });
  }
  }
