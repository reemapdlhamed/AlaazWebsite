import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';
import { AboutService } from '../services/about.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-about-ar',
  templateUrl: './about-ar.component.html',
  styleUrls: ['./about-ar.component.css']
})
// export class AboutArComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }




export class  AboutArComponent implements OnInit {
  abouts: any;
  private aboutsSub = new Subscription();
  constructor(public AboutService: AboutService) {}

  ngOnInit() {
    this.AboutService.getDate().subscribe((res) => {
      this.abouts = res;
      console.log(res);
    });
    // this.AboutService.getDate();
    // this.aboutsSub = this.AboutService.getPostUpdateListener().subscribe(
    //   (res) => {
    //     this.abouts = res;
    //     console.log(res);
    //   }
    // );
  }
}

