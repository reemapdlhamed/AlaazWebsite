import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
@Component({
  selector: 'app-homepage-ar',
  templateUrl: './homepage-ar.component.html',
  styleUrls: ['./homepage-ar.component.css'],
})
export class HomepageArComponent implements OnInit {
  homes: any;
  starRating = 1;
  rate: any;
  constructor(public homeservice: HomeService) {}
stringTonumber(str:string){
return Number(str)
}
  ngOnInit(): void {
    this.homeservice.getHomeData().subscribe((res) => {
      this.homes = res;
      // console.log(res);
      this.rate = this.homes.Stores;
      console.log(this.rate);
    });
  }
}
